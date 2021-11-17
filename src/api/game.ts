import axios from "axios";

class GameService {
  fetchGames = async ({ limit = 0, page = 0 }) => {
    const token = localStorage.getItem("jwt");
    const result = await axios.get(
      `http://localhost:3000/game?limit=${limit}&page=${page}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return result.data;
  };
}

const GameServiceInstance = new GameService();
export { GameServiceInstance as GameService };
