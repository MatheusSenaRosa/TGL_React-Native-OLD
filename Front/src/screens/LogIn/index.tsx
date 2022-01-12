import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import {
  Screen,
  SignUpContainer,
  FormContainer,
  TextForget,
  SignUpText,
  Title,
} from "./styles";

import { Logo, Input, ConfirmButton } from "@components/index";
import { loginConfig } from "@shared/services/endpoints";

export default function LogIn() {
  const navigation = useNavigation();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const isLoadingHandler = (current: boolean) => {
    setIsLoading(current);
  };

  const loginHandler = () => {
    if (!emailInput.trim()) {
      return Alert.alert("Empty email", "The email input is empty.", [
        { text: "Close", style: "destructive" },
      ]);
    }
    if (!passwordInput.trim()) {
      return Alert.alert("Empty password", "The password input is empty.", [
        { text: "Close", style: "destructive" },
      ]);
    }
    loginConfig(emailInput, passwordInput, isLoadingHandler).then((response) =>
      response ? dispatch({ type: "SET_IS_LOGGED" }) : null
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#f7f7f7" }}>
      <Screen>
        <Logo />

        <Title>Authentication</Title>

        <FormContainer>
          <Input
            placeholder="Email"
            value={emailInput}
            onChangeText={setEmailInput}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            value={passwordInput}
            onChangeText={setPasswordInput}
          />
          <TextForget onPress={() => navigation.navigate("ResetPassword")}>
            I forget my password
          </TextForget>
          <ConfirmButton
            text="Log In"
            onPress={loginHandler}
            isLoading={isLoading}
          />
        </FormContainer>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("SignUp")}
          style={{ marginTop: "2%" }}
        >
          <SignUpContainer>
            <SignUpText>Sign Up</SignUpText>
            <Feather
              name="arrow-right"
              size={20}
              color={"#535351"}
              style={{ marginTop: 4, marginLeft: 4 }}
            />
          </SignUpContainer>
        </TouchableWithoutFeedback>
      </Screen>
    </ScrollView>
  );
}
