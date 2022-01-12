import styled from "styled-components/native";
import { theme } from "@global/styles/theme";

export const Screen = styled.View`
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
  background-color: #ffffff;
  border-width: 1px;
  border-color: #dddddd;
  border-radius: 14px;
  overflow: hidden;
`;

export const TextForget = styled.Text`
  margin-top: 10px;
  font-family: ${theme.fonts.Roboto40};
  color: #c1c1c1;
  text-align: right;
  font-size: 14px;
  padding-right: 20px;
`;

export const SignUpContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SignUpText = styled.Text`
  font-size: 23px;
  font-family: ${theme.fonts.Roboto50_Medium};
  color: #707070;
`;
