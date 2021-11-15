import { takeLatest, all, call, put } from "redux-saga/effects";
import { AUTH } from "./consts";
import { SagaAction } from "../../commonTypes";
import { AuthData } from "./types";
import { AuthService } from "../../api/auth";
import { push } from "connected-react-router";

function* login({ payload }: SagaAction<AuthData>): any {
  try {
    const { data } = yield call(AuthService.login, payload);
    localStorage.setItem("jwt", data.access_token);
    yield put(push("/dashboard"));
  } catch (e) {
    console.log(e);
  }
}

export default function* authSaga() {
  yield all([takeLatest(AUTH, login)]);
}
