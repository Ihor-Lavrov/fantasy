import { GAMES_FETCHED } from "./consts";

interface initialStateInterface {
  futureGames: any[];
}

const initialState: initialStateInterface = {
  futureGames: [],
};
export const gameReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case GAMES_FETCHED: {
      return {
        ...state,
        futureGames: payload,
      };
    }
    default:
      return state;
  }
};
