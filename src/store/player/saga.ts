import { takeLatest, all, call } from "redux-saga/effects";
import { GET_PLAYERS_LIST } from "./consts";
import { SagaAction } from "../../commonTypes";
import { PlayerService } from "../../api/player";

function* getPlayerList(): any {
  try {
    console.log(2222);
    const { data } = yield call(PlayerService.getPlayerList);
    console.log("players", data);
  } catch (e) {
    console.log(e);
  }
}

export default function* authSaga() {
  yield all([takeLatest(GET_PLAYERS_LIST, getPlayerList)]);
}
