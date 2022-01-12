import { Alert } from "react-native";
import api from "../config";

const signUpConfig = async (
  name: string,
  email: string,
  password: string,
  navigate: () => void
) => {
  try {
    const response = await api.post("user/create", { email, password, name });
    Alert.alert(
      `Success, ${response.data.user.name}!`,
      "Your user has been created",
      [
        {
          text: "Close",
          style: "destructive",
        },
      ]
    );
    navigate();
  } catch (err: any) {
    Alert.alert("Error", "This user already exists", [
      { text: "Close", style: "destructive" },
    ]);
  }
};

export default signUpConfig;
