import {put, takeLatest} from 'redux-saga/effects';
import {getCharacters} from './actions';
import {callAPI} from '../../../services/api-services';
import {CharacterAPIResType} from '../../../types/character-res-type';
import {isEmpty} from 'lodash';

const GET_CHARACTERS_URL = 'character';

const getCharactersApiCall = (pageNumber: number) => {
  return {
    apiURL: GET_CHARACTERS_URL + `?page=${pageNumber}`,
    method: 'GET',
    data: {},
    authTokenRequired: false,
  };
};

const getCharactersPaginationApiCall = (url: string): any => {
  return {
    apiURL: url,
    method: 'GET',
    data: {},
    authTokenRequired: false,
    isBaseURLRequired: false,
  };
};

function* getCharactersRequest(action: any) {
  try {
    const paginationURL = action?.payload?.next || '';
    const response: any = yield callAPI(
      !isEmpty(paginationURL)
        ? getCharactersPaginationApiCall(paginationURL)
        : getCharactersApiCall(1),
    );
    if (response.status === 200) {
      yield put(
        getCharacters.success({
          data: response.data as CharacterAPIResType,
          paginationEnable: !isEmpty(paginationURL),
        }),
      );
    } else {
      yield put(getCharacters.failure(response));
    }
  } catch (error) {
    yield put(getCharacters.failure({}));
  }
}

export default function* charactersListSaga() {
  yield takeLatest(getCharacters.TRIGGER, getCharactersRequest);
}
