import { all } from 'redux-saga/effects';
import userSaga from "./user/saga";
import authSaga from "./auth/saga";
import playerSaga from "./player/saga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    authSaga(),
    playerSaga(),
  ])
}