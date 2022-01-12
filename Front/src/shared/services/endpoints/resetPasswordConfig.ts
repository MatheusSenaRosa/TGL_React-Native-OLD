import { Alert } from "react-native";
import api from "../config";

const resetPasswordConfig = async (email: string) => {
  try {
    const { data } = await api.post("reset", { email: email });

    return data.token;
  } catch (err) {
    Alert.alert("Invalid user", "This user doesn`t exists.", [
      { text: "Close", style: "destructive" },
    ]);
  }
};

export default resetPasswordConfig;
