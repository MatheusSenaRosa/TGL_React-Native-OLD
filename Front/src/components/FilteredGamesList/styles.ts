import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { theme } from "@global/styles/theme";

export const GamesListItem = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ColoredDiviser = styled.View<{ color: string }>`
  background-color: ${({ color }) => color};
  height: 100%;
  width: 6px;
  border-radius: 5px;
`;

export const Content = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const TextNumbers = styled.Text`
  color: #868686;
  font-family: ${theme.fonts.Roboto70_Bold};
  font-size: ${Dimensions.get("window").width / 25}px;
`;

export const DateAndPrice = styled.Text`
  margin-top: 8px;
  margin-bottom: 8px;
  color: #868686;
  font-family: ${theme.fonts.Roboto30};
  font-size: ${Dimensions.get("window").width / 25}px;
`;

export const Name = styled.Text<{ color: string }>`
  font-size: ${Dimensions.get("window").width / 25}px;

  color: ${({ color }) => color};

  font-family: ${theme.fonts.Roboto90_Bold};
`;

export const EmptyDataContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 30px;
  font-family: ${theme.fonts.Roboto50_Medium};
  color: rgba(255, 0, 0, 0.7);
`;

export const EmptyDescription = styled.Text`
  text-align: center;
  font-size: 20px;
  width: 70%;
  font-family: ${theme.fonts.Roboto50_Medium};
  color: #868686;
`;
