import { Alert } from "react-native";
import api from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const loginConfig = async (
  email: string,
  password: string,
  isLoading: (current: boolean) => void
) => {
  try {
    isLoading(true);
    const { data } = await api.post("login", { email, password });

    await AsyncStorage.setItem("@token", data.token.token);

    isLoading(false);

    return true;
  } catch (err) {
    isLoading(false);

    Alert.alert("Invalid user", "The email or password is invalid.", [
      { text: "Close", style: "destructive" },
    ]);

    return false;
  }
};

export default loginConfig;
