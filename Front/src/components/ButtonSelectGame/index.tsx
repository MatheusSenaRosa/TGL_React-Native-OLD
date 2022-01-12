import React from "react";
import {
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from "react-native";

import { Button, Name, TouchableArea } from "./styles";

type Props = TouchableNativeFeedbackProps & {
  name: string;
  color: string;
  active?: boolean;
};

const ButtonSelectGame = ({ color, name, active, ...rest }: Props) => {
  return (
    <TouchableArea>
      <TouchableNativeFeedback {...rest}>
        <Button color={color} active={active}>
          <Name color={color} active={active}>
            {name}
          </Name>
        </Button>
      </TouchableNativeFeedback>
    </TouchableArea>
  );
};

export default ButtonSelectGame;
