import api from "../config";

const saveCartConfig = async (
  itemsToSave: { game_id: number; numbers: number[] }[]
) => {
  try {
    await api.post("bet/new-bet", { games: [...itemsToSave] });
  } catch (err) {
    console.log(err);
  }
};

export default saveCartConfig;
