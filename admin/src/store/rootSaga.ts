import { all } from 'redux-saga/effects';
import userSaga from "./user/saga";
import authSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    authSaga(),
  ])
}