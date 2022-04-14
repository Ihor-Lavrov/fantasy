import axios from "axios";

class PlayerService {
  getPlayerList = async () => {
    const result = await axios.get("http://localhost:3000/player", {
      withCredentials: true,
    });

    return { data: result?.data };
  };
}

const PlayerServiceInstance = new PlayerService();
export { PlayerServiceInstance as PlayerService };
