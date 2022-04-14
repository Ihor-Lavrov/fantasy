import axios from "axios";
import { CreateUserPayload } from "../store/user/types";

class UserService {
  createUser = async (data: CreateUserPayload) => {
    return axios.post("http://localhost:3000/auth/register", data);
  };
}

const UserServiceInstance = new UserService();
export { UserServiceInstance as UserService };
