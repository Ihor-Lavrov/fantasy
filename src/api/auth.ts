import { AuthData } from "../store/auth/types";
import axios from "axios";

class AuthSerice {
  login = async (data: AuthData) => {
    const result = await axios.post("http://localhost:3000/auth/login", data, {
      withCredentials: true,
    });
    console.log(result);
    return { data: result?.data };
  };

  register = async (data: any) => {
    const result = await axios.post('http://localhost:3000/auth/register', data , {
    })
    console.log(result);
  }
}

const AuthServiceInstance = new AuthSerice();
export { AuthServiceInstance as AuthService };
