import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "@global/styles/theme";

export const Screen = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #707070;
  font-family: ${theme.fonts.Roboto50_Medium};
  margin-top: ${Dimensions.get("window").height / 4}px;
  margin-bottom: 10px;
`;

export const Form = styled.View`
  overflow: hidden;
  border-width: 1px;
  border-color: #dddddd;
  background-color: #ffffff;
  border-radius: 14px;
`;
