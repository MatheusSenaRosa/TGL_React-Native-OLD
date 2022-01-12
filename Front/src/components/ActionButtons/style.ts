import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { theme } from "@global/styles/theme";

export const Container = styled.View<{ cart?: boolean }>`
  width: ${Dimensions.get("window").width / 3}px;
  height: ${Dimensions.get("window").width / 8}px;
  border-width: 1px;
  border-color: #27c383;
  border-radius: 12px;
  ${({ cart }) => cart && "background-color: " + "#27C383"};
  overflow: hidden;
`;

export const ButtonArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<{ cart?: boolean }>`
  color: ${({ cart }) => (cart ? "white" : "#27C383")};
  font-family: ${theme.fonts.Roboto50_Medium};
  font-size: ${Dimensions.get("window").width / 27}px;
`;
