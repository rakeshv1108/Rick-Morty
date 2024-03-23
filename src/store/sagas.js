import {all} from 'redux-saga/effects';
import charactersListSaga from '../screens/characters-list-screen/redux/saga';
import locationDataSaga from '../screens/character-detail-screen/redux/saga';

function* rootSaga() {
  yield all([charactersListSaga(), locationDataSaga()]);
}

export default rootSaga;
