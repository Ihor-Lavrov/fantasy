import { takeLatest, all, call } from 'redux-saga/effects';
import { CREATE_NEW_USER } from "./consts";
import { CreateUserPayload } from "./types";
import { UserService } from "../../api/user";
import { SagaAction } from "../../commonTypes";

function* createUser({ payload }: SagaAction<CreateUserPayload>): any {
  try {
    yield call(UserService.createUser, payload);
  } catch (e) {
    console.log(e)
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(CREATE_NEW_USER, createUser),
  ])
}