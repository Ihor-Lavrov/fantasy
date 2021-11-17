import { FETCH_GAMES, GAMES_FETCHED } from "./consts";
import { GamePagination } from "./types";

export const gameActions = {
  fetchGames: (payload: GamePagination) => ({
    type: FETCH_GAMES,
    payload,
  }),

  gamesFetched: (payload: any) => ({
    type: GAMES_FETCHED,
    payload,
  }),
};
