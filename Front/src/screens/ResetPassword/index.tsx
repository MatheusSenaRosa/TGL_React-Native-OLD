import React, { useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { Alert, ScrollView } from "react-native";

import { FormContainer, Screen, Title } from "./styles";

import { BackButton, ConfirmButton, Input, Logo } from "@components/index";
import {
  changePasswordConfig,
  resetPasswordConfig,
} from "@shared/services/endpoints";
import { passwordVerification } from "@shared/helpers/inputVerification";

const ResetPassword = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [token, setToken] = useState("");
  const navigation = useNavigation();

  const confirmHandler = async () => {
    if (!token) {
      if (!emailInput.trim()) {
        return Alert.alert("Empty input", `The email input is empty.`, [
          { text: "Close", style: "destructive" },
        ]);
      }

      let getToken = await resetPasswordConfig(emailInput);
      if (getToken) setToken(getToken);
      return;
    }

    if (!passwordInput.trim()) {
      return Alert.alert("Empty input", `The password input is empty.`, [
        { text: "Close", style: "destructive" },
      ]);
    }

    if (!passwordVerification(passwordInput)) {
      Alert.alert(
        "Invalid",
        `The Password must have 8 characters or more, uppercase characters, lowercase characters and numbers.`,
        [{ text: "Close", style: "destructive" }]
      );
      return;
    }
    changePasswordConfig(token, passwordInput);
    navigation.dispatch(StackActions.replace("LogIn"));
  };
  return (
    <ScrollView style={{ backgroundColor: "#f7f7f7" }}>
      <Screen>
        <Logo />
        <Title>Reset Password</Title>
        <FormContainer>
          {!token ? (
            <Input placeholder="Email" onChangeText={setEmailInput} />
          ) : (
            <Input
              placeholder="New password"
              onChangeText={setPasswordInput}
              secureTextEntry={true}
            />
          )}
          <ConfirmButton
            text={token ? "Update" : "Send link"}
            onPress={confirmHandler}
          />
        </FormContainer>
        <BackButton />
      </Screen>
    </ScrollView>
  );
};

export default ResetPassword;
