import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { BackText, Container } from "./styles";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      style={{ marginTop: "2%" }}
      onPress={() => navigation.goBack()}
    >
      <Container>
        <Feather
          name="arrow-left"
          size={20}
          color={"#535351"}
          style={{ marginTop: 4, marginRight: 4 }}
        />
        <BackText>Back</BackText>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default BackButton;
