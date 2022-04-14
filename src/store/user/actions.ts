import { CREATE_NEW_USER } from "./consts";
import { CreateUserPayload } from "./types";

export const userActions = {
  createUser: (payload: CreateUserPayload) => ({
    type: CREATE_NEW_USER,
    payload: payload,
  }),
};
