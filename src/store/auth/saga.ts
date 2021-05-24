import { takeLatest, all, call, } from "redux-saga/effects";
import { AUTH } from "./consts";
import { SagaAction } from "../../commonTypes";
import { AuthData } from "./types";
import { AuthService } from "../../api/auth";

function* login({ payload }: SagaAction<AuthData>): any {
  try {
    const { data } = yield call(AuthService.login, payload);
  } catch (e) {
    console.log(e);
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(AUTH, login),
  ])
}