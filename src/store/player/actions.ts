import { GET_PLAYERS_LIST } from "./consts";

export const playerActions = {
  getPlayersList: () => ({
    type: GET_PLAYERS_LIST,
  }),
};
