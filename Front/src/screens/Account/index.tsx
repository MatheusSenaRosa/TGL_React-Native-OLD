import React, { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Content, Form, Screen, Title } from "./styles";

import { ConfirmButton, Header, Input } from "@components/index";
import { userDataConfig, userUpdateConfig } from "@shared/services/endpoints";
import {
  emailVerification,
  nameVerification,
} from "@shared/helpers/inputVerification";

const Account = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [editable, setEditable] = useState(false);
  const [invalidInputs, setInvalidInputs] = useState([] as string[]);
  const navigation = useNavigation();

  useEffect(() => {
    const getUserData = async () => {
      const { name, email } = await userDataConfig();
      setEmailInput(email);
      setNameInput(name);
    };
    getUserData();
  }, []);

  const onBlurHandler = (inputName: string) => {
    switch (inputName) {
      case "Email":
        if (!emailVerification(emailInput)) {
          if (!invalidInputs.includes("Email")) {
            return setInvalidInputs((old) => [...old, "Email"]);
          }
        }
        return;

      case "Name":
        if (!nameVerification(nameInput)) {
          if (!invalidInputs.includes("Name")) {
            return setInvalidInputs((old) => [...old, "Name"]);
          }
        }
        return;
    }
  };

  const onFocusHandler = (inputName: string) => {
    let aux = [...invalidInputs];
    if (aux.includes(inputName)) {
      aux.splice(aux.indexOf(inputName), 1);
      setInvalidInputs([...aux]);
    }
  };

  const emailInputVerification = () => {
    if (!emailInput.trim()) {
      Alert.alert("Empty input", "The email input is empty", [
        { text: "close", style: "destructive" },
      ]);
      return false;
    }

    if (!emailVerification(emailInput)) {
      Alert.alert("Invalid email", "The email input is invalid", [
        { text: "close", style: "destructive" },
      ]);
      return false;
    }
    return true;
  };

  const passwordInputVerification = () => {
    if (!nameInput.trim()) {
      Alert.alert("Empty input", "The name input is empty", [
        { text: "close", style: "destructive" },
      ]);
      return false;
    }

    if (!nameVerification(nameInput)) {
      Alert.alert("Invalid email", "The name input is invalid", [
        { text: "close", style: "destructive" },
      ]);
      return false;
    }

    return true;
  };

  const confirmButtonHandler = () => {
    if (!editable) {
      return Alert.alert("Update", "Are you sure to update your user?", [
        { text: "No", style: "destructive" },
        { text: "Yes", style: "destructive", onPress: () => setEditable(true) },
      ]);
    }

    if (!emailInputVerification()) return;

    if (!passwordInputVerification()) return;

    userUpdateConfig(emailInput, nameInput);
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <Screen>
        <Header btnLeft="Log Out" btnRight="HomeOfAccountPage" />
        <Content>
          <Title>Account</Title>
          <Form>
            <Input
              invalid={invalidInputs.includes("Email")}
              placeholder="Email"
              value={emailInput}
              onBlur={() => onBlurHandler("Email")}
              onFocus={() => onFocusHandler("Email")}
              editable={editable}
              onChangeText={setEmailInput}
            />
            <Input
              invalid={invalidInputs.includes("Name")}
              placeholder="Name"
              onBlur={() => onBlurHandler("Name")}
              onFocus={() => onFocusHandler("Name")}
              value={nameInput}
              editable={editable}
              onChangeText={setNameInput}
            />
            <ConfirmButton
              text={editable ? "Send" : "Update"}
              onPress={confirmButtonHandler}
            />
          </Form>
        </Content>
      </Screen>
    </ScrollView>
  );
};

export default Account;
