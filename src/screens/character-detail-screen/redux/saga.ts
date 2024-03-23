import {put, takeLatest} from 'redux-saga/effects';
import {getEpisodes, getLocations} from './actions';
import {callAPI} from '../../../services/api-services';
import {CharacterLocationObjType} from '../../../types/location-res-type';
import {CharacterEpisodeObjType} from '../../../types/episodes-res-type';

const getCommonAPICall = (url: string) => {
  return {
    apiURL: url,
    method: 'GET',
    data: {},
    authTokenRequired: false,
    isBaseURLRequired: false,
  };
};

function* getLocationRequest(action: any) {
  try {
    const url = action?.payload?.url || '';
    let apiReq = getCommonAPICall(url);
    const response: any = yield callAPI(apiReq);
    if (response.status === 200) {
      yield put(
        getLocations.success({
          data: response.data as CharacterLocationObjType,
        }),
      );
    } else {
      yield put(getLocations.failure(response));
    }
  } catch (error) {
    yield put(getLocations.failure({}));
  }
}

function* getEpisodesRequest(action: any) {
  try {
    const urls = action?.payload?.urls || '';
    const responses: any = yield Promise.all(
      urls.map((url: string) => callAPI(getCommonAPICall(url))),
    );
    const names = responses.map((response: any) => response.data.name);
    yield put(
      getEpisodes.success({
        data: names as string[],
      }),
    );
  } catch (error) {
    yield put(getEpisodes.failure());
  }
}

export default function* locationDataSaga() {
  yield takeLatest(getLocations.TRIGGER, getLocationRequest);
  yield takeLatest(getEpisodes.TRIGGER, getEpisodesRequest);
}
