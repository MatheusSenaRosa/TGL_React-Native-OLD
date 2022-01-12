import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "@global/styles/theme";

export const Screen = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContainerNewBet = styled.View`
  align-self: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TextDefault = styled.Text<{ color: string }>`
  align-self: center;
  font-size: ${Dimensions.get("window").width / 16}px;
  font-size: 25px;
  font-family: ${theme.fonts.Roboto50_Medium};
  color: ${(props) => props.color};
`;

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  margin-bottom: ${Dimensions.get("window").height / 8}px;
`;
