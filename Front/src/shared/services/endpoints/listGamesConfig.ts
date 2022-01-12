import api from "../config";

const listGamesConfig = async () => {
  const { data } = await api.get("cart_games");
  return data;
};

export default listGamesConfig;
