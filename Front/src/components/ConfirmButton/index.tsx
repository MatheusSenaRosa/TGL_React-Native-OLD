import React from "react";

import { ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
} from "react-native";

import { ButtonContainer, TextButton } from "./styles";

type Props = TouchableNativeFeedbackProps & {
  text: string;
  isLoading?: boolean;
};

const ConfirmButton = ({ text, isLoading, ...rest }: Props) => {
  const buttonProps = isLoading ? null : { ...rest };

  return (
    <TouchableNativeFeedback {...buttonProps}>
      <ButtonContainer>
        {isLoading ? (
          <ActivityIndicator color={"#B5C401"} size={25} />
        ) : (
          <>
            <TextButton>{text}</TextButton>
            <Feather
              name="arrow-right"
              size={20}
              color={"#B5C401"}
              style={{ marginTop: 4 }}
            />
          </>
        )}
      </ButtonContainer>
    </TouchableNativeFeedback>
  );
};

export default ConfirmButton;
