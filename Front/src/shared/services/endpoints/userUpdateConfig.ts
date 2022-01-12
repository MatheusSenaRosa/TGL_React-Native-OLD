import { Alert } from "react-native";
import api from "../config";

const userUpdateConfig = async (email: string, name: string) => {
  try {
    await api.put("user/update", { email, name });
    return Alert.alert("User updated", "Your user has been updated.", [
      { text: "Close", style: "destructive" },
    ]);
  } catch (err) {
    console.log(err);
  }
};
export default userUpdateConfig;
