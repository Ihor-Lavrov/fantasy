import { all } from "redux-saga/effects";
import userSaga from "./user/saga";
import authSaga from "./auth/saga";
import playerSaga from "./player/saga";
import gameSaga from "./game/saga";

export default function* rootSaga() {
  yield all([userSaga(), authSaga(), playerSaga(), gameSaga()]);
}
