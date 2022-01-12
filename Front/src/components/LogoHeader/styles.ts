import styled from "styled-components/native";

import { theme } from "@global/styles/theme";

export const Container = styled.View`
  bottom: -5px;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.Roboto70_Bold};
  font-size: 40px;
  color: #707070;
`;

export const GreenDiviser = styled.View`
  background-color: #b5c401;
  border-radius: 10px;
  height: 8px;
`;
