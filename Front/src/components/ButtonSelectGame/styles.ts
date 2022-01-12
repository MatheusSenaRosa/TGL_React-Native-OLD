import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { theme } from "@global/styles/theme";

export const TouchableArea = styled.View`
  border-radius: 15px;
  overflow: hidden;
  margin-left: 5px;
`;

export const Button = styled.View<{ color: string; active?: boolean }>`
  border-width: 2px;
  border-color: ${({ color }) => color};
  width: 100px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${({ active, color }) => (active ? color : "white")};
`;

export const Name = styled.Text<{ color: string; active?: boolean }>`
  color: ${({ active, color }) => (active ? "white" : color)};
  font-family: ${theme.fonts.Roboto70_Bold};
  font-size: ${Dimensions.get("window").width / 29}px;
`;
