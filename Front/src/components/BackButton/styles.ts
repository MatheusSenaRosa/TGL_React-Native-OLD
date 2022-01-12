import styled from "styled-components/native";
import { theme } from "@global/styles/theme";

export const Container = styled.View`
  margin-right: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackText = styled.Text`
  font-size: 23px;
  font-family: ${theme.fonts.Roboto50_Medium};
  color: #707070;
`;
