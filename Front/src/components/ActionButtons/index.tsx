import React from "react";

import {
  Dimensions,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { ButtonArea, Container, Title } from "./style";

type Props = TouchableNativeFeedbackProps & {
  cart?: boolean;
  text: string;
};

const ActionButtons = ({ cart = false, text, ...rest }: Props) => {
  return (
    <Container cart={cart}>
      <TouchableNativeFeedback {...rest}>
        <ButtonArea>
          {cart && (
            <Feather
              name="shopping-cart"
              color={"white"}
              size={Dimensions.get("window").width / 20}
              style={{ marginRight: 5 }}
            />
          )}
          <Title cart={cart}>{text}</Title>
        </ButtonArea>
      </TouchableNativeFeedback>
    </Container>
  );
};

export default ActionButtons;
