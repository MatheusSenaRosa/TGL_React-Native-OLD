import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { theme } from "@global/styles/theme";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const CotainerTitle = styled.View`
  margin-top: 10%;
  flex-direction: row;
`;

export const TitleBold = styled.Text`
  font-family: ${theme.fonts.Roboto70_Bold};
  font-size: ${Dimensions.get("window").width / 19}px;
  color: #707070;
`;

export const TitleNormal = styled.Text`
  margin-left: 5px;
  font-family: ${theme.fonts.Roboto40};
  font-size: ${Dimensions.get("window").width / 19}px;
  color: #707070;
`;

export const ChooseGameText = styled.Text`
  font-size: ${Dimensions.get("window").width / 25}px;
  margin-top: 5%;
  color: #868686;
  font-family: ${theme.fonts.Roboto50_Medium};
  margin-bottom: 3%;
`;

export const FillYourBetText = styled.Text`
  color: #868686;
  font-family: ${theme.fonts.Roboto90_Bold};
  align-self: flex-start;
  font-size: ${Dimensions.get("window").width / 28}px;
  margin-top: 3%;
`;

export const Description = styled.Text`
  color: #868686;
  font-family: ${theme.fonts.Roboto40};
  align-self: flex-start;
  font-size: ${Dimensions.get("window").width / 28}px;
`;

export const NumbersContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ScrollViewContainer = styled.View`
  height: ${Dimensions.get("window").height < 700
    ? Dimensions.get("window").height / 3.2
    : Dimensions.get("window").height / 2.3}px;
  padding-bottom: 15px;
`;

export const ActionButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 5px;
`;
