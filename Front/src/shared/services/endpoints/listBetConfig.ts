import api from "../config";

const listBetConfig = async () => {
  try {
    const { data } = await api.get("bet/all-bets");

    return data;
  } catch (err) {}
};

export default listBetConfig;
