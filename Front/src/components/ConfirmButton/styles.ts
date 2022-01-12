import styled from "styled-components/native";
import { theme } from "@global/styles/theme";

export const ButtonContainer = styled.View`
  height: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  margin-right: 5px;
  color: #b5c401;
  font-family: ${theme.fonts.Roboto50_Medium};
  font-size: 23px;
`;
