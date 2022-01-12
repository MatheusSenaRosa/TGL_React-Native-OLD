import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { theme } from "@global/styles/theme";

export const Container = styled.View`
  padding: 7px 10px;
  flex-direction: row;
`;

export const TrashArea = styled.View`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const ColoredDiviser = styled.View<{ color: string }>`
  height: 100%;
  background-color: ${({ color }) => color};
  width: 5px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const TouchableTrash = styled.View`
  align-self: center;
  border-radius: 25px;
  overflow: hidden;
`;

export const Content = styled.View`
  flex: 1;
  padding-left: 10px;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const NumbersText = styled.Text`
  color: #868686;
  font-family: ${theme.fonts.Roboto50_Medium};
  font-size: ${Dimensions.get("window").width / 22}px;
`;

export const NamePriceView = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const NameText = styled.Text<{ color: string }>`
  font-family: ${theme.fonts.Roboto70_Bold};
  font-size: ${Dimensions.get("window").width / 22}px;
  color: ${({ color }) => color};
`;

export const PriceText = styled.Text`
  margin-left: 10px;
  font-family: ${theme.fonts.Roboto40};
  font-size: ${Dimensions.get("window").width / 22}px;
  color: #868686;
`;
