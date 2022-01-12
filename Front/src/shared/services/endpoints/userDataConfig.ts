import api from "../config";

const userDataConfig = async () => {
  try {
    const { data } = await api.get("user/my-account");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default userDataConfig;
