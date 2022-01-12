import styled from "styled-components/native";
import { theme } from "@global/styles/theme";

export const Screen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 5%;
  margin-bottom: 3%;
  font-size: 23px;
  font-family: ${theme.fonts.Roboto50_Medium};
  color: #707070;
`;

export const FormContainer = styled.View`
  background-color: white;
  border-width: 1px;
  border-color: #dddddd;
  height: 222px;
  border-radius: 14px;
  overflow: hidden;
`;
