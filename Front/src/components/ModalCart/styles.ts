import { theme } from "./../../global/styles/theme";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const TouchableOverlay = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: ${Dimensions.get("window").height / 3.5}px;
`;

export const Overlay = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
`;

export const Container = styled.View`
  background-color: #f7f7f7;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  flex: 1;
`;

export const HeaderModal = styled.View`
  width: 100%;
  padding-left: 20px;
  height: 60px;
  padding-right: 50px;
  border-bottom-width: 2px;
  border-color: #ebebeb;
  flex-direction: row;
`;

export const CircleTouchable = styled.View`
  border-radius: 21px;
  height: 42px;
  width: 42px;
  align-self: center;
  overflow: hidden;
`;

export const CloseIconArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  align-self: center;
  flex: 1;
  text-align: center;
  font-family: ${theme.fonts.Roboto70_Bold};
  font-size: 25px;
  color: #707070;
`;

export const ListContainer = styled.View<{ isEmpty: boolean }>`
  flex: 1;
  border-bottom-width: 2px;
  border-color: #ebebeb;
  ${({ isEmpty }) => isEmpty && "justify-content: center;"}
`;

export const Footer = styled.View``;

export const TotalContainer = styled.View`
  background-color: #f4f4f4;

  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const CartText = styled.Text`
  font-size: 25px;
  font-family: ${theme.fonts.Roboto90_Bold};
  color: #707070;
`;

export const TotalText = styled.Text`
  font-size: 25px;
  font-family: ${theme.fonts.Roboto30};
  margin-left: 3px;
  color: #707070;
`;

export const TouchableButtonSave = styled.View`
  background-color: #f4f4f4;
  border-top-width: 1px;
  border-color: #e2e2e2;
  height: 70px;
`;

export const SaveButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const TextButton = styled.Text`
  color: #27c383;
  font-family: ${theme.fonts.Roboto50_Medium};
  font-size: 30px;
`;

export const TextEmpty = styled.Text`
  align-self: center;
  color: rgba(255, 0, 0, 0.7);
  font-family: ${theme.fonts.Roboto50_Medium};
  font-size: 30px;
`;
