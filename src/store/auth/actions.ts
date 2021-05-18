import { AUTH } from "./consts";
import { AuthData } from "./types";

export const authActions = {
  login: (payload: AuthData) => ({
    type: AUTH,
    payload,
  })
}