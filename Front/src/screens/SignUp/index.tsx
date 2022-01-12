import React, { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";

import { Screen, FormContainer, Title } from "./styles";

import { Input, Logo, ConfirmButton, BackButton } from "@components/index";
import { signUpConfig } from "@shared/services/endpoints";
import {
  nameVerification,
  emailVerification,
  passwordVerification,
} from "@shared/helpers/inputVerification";

const SignUp = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [invalidInputs, setInvalidInputs] = useState<string[]>([] as string[]);
  const [passwordInput, setPasswordInput] = useState("");
  const navigation = useNavigation();

  const onBlurHandler = (inputName: string) => {
    switch (inputName) {
      case "Name":
        if (!nameVerification(nameInput)) {
          !invalidInputs.includes("Name") &&
            setInvalidInputs([...invalidInputs, "Name"]);
        }
        return;

      case "Email":
        if (!emailVerification(emailInput)) {
          !invalidInputs.includes("Email") &&
            setInvalidInputs([...invalidInputs, "Email"]);
        }
        return;

      case "Password":
        if (!passwordVerification(passwordInput)) {
          !invalidInputs.includes("Password") &&
            setInvalidInputs([...invalidInputs, "Password"]);
        }
        return;
    }
  };

  const onFocusHandler = (nameToRemove: string) => {
    let aux = [...invalidInputs];
    if (aux.includes(nameToRemove)) {
      aux.splice(aux.indexOf(nameToRemove), 1);
      setInvalidInputs([...aux]);
    }
  };

  const onSubmitVerification = () => {
    if (!nameInput.trim()) {
      Alert.alert("Empty name", "The name input is empty.", [
        { text: "Close", style: "destructive" },
      ]);
      return false;
    }
    if (invalidInputs.includes("Name")) {
      Alert.alert("Invalid name", "The name is invalid.", [
        { text: "Close", style: "destructive" },
      ]);
      return false;
    }
    if (!emailInput.trim()) {
      Alert.alert("Empty email", "The email input is empty.", [
        { text: "Close", style: "destructive" },
      ]);
      return false;
    }
    if (invalidInputs.includes("Email")) {
      Alert.alert("Invalid email", "The email is invalid.", [
        { text: "Close", style: "destructive" },
      ]);
      return false;
    }
    if (!passwordInput.trim()) {
      Alert.alert("Empty password", "The password input is empty.", [
        { text: "Close", style: "destructive" },
      ]);
      return false;
    }
    if (invalidInputs.includes("Password")) {
      Alert.alert(
        "Invalid password",
        "The password must contains lowercase characters, uppercase characters, numbers, more than 8 characters.",
        [{ text: "Close", style: "destructive" }]
      );
      return false;
    }
    return true;
  };

  const onSubmitHandler = () => {
    if (onSubmitVerification()) {
      signUpConfig(nameInput, emailInput, passwordInput, () =>
        navigation.dispatch(StackActions.replace("LogIn"))
      );
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#f7f7f7" }}>
      <Screen>
        <Logo />
        <Title>Registration</Title>
        <FormContainer>
          <Input
            placeholder="Name"
            onChangeText={setNameInput}
            value={nameInput}
            onBlur={() => onBlurHandler("Name")}
            invalid={invalidInputs.includes("Name")}
            onFocus={() => onFocusHandler("Name")}
          />
          <Input
            placeholder="Email"
            onChangeText={setEmailInput}
            value={emailInput}
            onBlur={() => onBlurHandler("Email")}
            invalid={invalidInputs.includes("Email")}
            onFocus={() => onFocusHandler("Email")}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            value={passwordInput}
            onChangeText={setPasswordInput}
            onBlur={() => onBlurHandler("Password")}
            invalid={invalidInputs.includes("Password")}
            onFocus={() => onFocusHandler("Password")}
          />
          <ConfirmButton text="Register" onPress={onSubmitHandler} />
        </FormContainer>
        <BackButton />
      </Screen>
    </ScrollView>
  );
};

export default SignUp;
