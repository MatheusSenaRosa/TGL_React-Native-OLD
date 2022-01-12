import React from "react";

import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { Container, Number, TouchableCircle } from "./styles";

type Props = {
  number: number;
  active: boolean;
  color: string;
  selectThisNumber: () => void;
};

const NumberButton = ({ number, active, color, selectThisNumber }: Props) => {
  return (
    <TouchableCircle>
      <TouchableNativeFeedback onPress={selectThisNumber}>
        <Container active={active} color={color}>
          <Number>{number < 10 ? "0" + number.toString() : number}</Number>
        </Container>
      </TouchableNativeFeedback>
    </TouchableCircle>
  );
};

export default NumberButton;
