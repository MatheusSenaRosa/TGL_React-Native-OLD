import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { theme } from "@global/styles/theme";

export const ContainerListButtons = styled.View`
  margin-top: 5px;
  align-items: center;
  height: 80px;
`;

export const FiltersText = styled.Text`
  font-family: ${theme.fonts.Roboto40};
  font-size: ${Dimensions.get("window").width / 20}px;
  color: #868686;
  margin-bottom: 6px;
`;
