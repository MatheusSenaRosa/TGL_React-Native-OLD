import { Alert } from "react-native";
import api from "../config";

const changePasswordConfig = async (token: string, password: string) => {
  try {
    const { data } = await api.post(`reset/${token}`, { password: password });
    Alert.alert("Success!!", `Your password has been updated.`, [
      { text: "Close", style: "destructive" },
    ]);
    return;
  } catch (err) {
    console.log(err);
  }
};

export default changePasswordConfig;
