import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { theme } from "@global/styles/theme";

export const TitleContainer = styled.View`
  margin-top: ${Dimensions.get("window").height / 10}px;
  align-items: center;
`;

export const TitleElement = styled.Text`
  width: 220px;
  text-align: center;
  font-size: ${Dimensions.get("window").width / 9}px;
  color: #707070;
  font-family: ${theme.fonts.Roboto70_Bold};
`;

export const ContainerGreen = styled.View`
  margin-top: 10px;
  background-color: #b5c401;
  width: 90px;
  border-radius: 20px;
  height: 29px;
  justify-content: center;
  align-items: center;
`;

export const TextGreen = styled.Text`
  color: white;
  font-size: ${Dimensions.get("window").width / 20}px;
  font-family: ${theme.fonts.Roboto70_Bold};
`;
