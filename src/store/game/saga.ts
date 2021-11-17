import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { FETCH_GAMES } from "./consts";
import { SagaAction } from "../../commonTypes";
import { GamePagination } from "./types";
import { GameService } from "../../api";
import { gameActions } from "./actions";

function* fetchGames({ payload }: SagaAction<GamePagination>): any {
  const result = yield call(GameService.fetchGames, payload);
  console.log("saga", result);

  yield put(gameActions.gamesFetched(result.data));
}

export default function* gameSaga() {
  yield all([takeLatest(FETCH_GAMES, fetchGames)]);
}
