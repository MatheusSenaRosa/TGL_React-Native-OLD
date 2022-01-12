import React from "react";
import { TextInputProps } from "react-native";
import { InputElement } from "./styles";

type Props = TextInputProps & {
  invalid?: boolean;
};

const Input = ({ invalid, ...rest }: Props) => (
  <InputElement
    {...rest}
    invalid={invalid}
    placeholderTextColor="#9D9D9D"
    autoCapitalize="none"
    autoCorrect={false}
  />
);

export default Input;
