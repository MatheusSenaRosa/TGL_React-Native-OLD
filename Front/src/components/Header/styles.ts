import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { theme } from "@global/styles/theme";

export const Container = styled.View`
  width: 100%;
  border-bottom-width: 3px;
  border-bottom-color: #ebebeb;
  height: 90px;
  flex-direction: row;
  padding-top: 26px;
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 8%;
`;

export const LogOutContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TouchableCart = styled.View`
  align-self: center;
  border-radius: 24px;
  overflow: hidden;
`;

export const QuantityContainer = styled.View`
  background-color: #b5c401;
  position: absolute;
  top: 3px;
  right: 6px;
  z-index: 999;
  width: 22px;
  height: 22px;
  border-radius: 11px;
  align-items: center;
`;

export const QuantityText = styled.Text`
  position: absolute;
  top: 0px;
  font-family: ${theme.fonts.Roboto70_Bold};
  color: #707070;
`;

export const CartContainer = styled.View`
  padding-top: 15px;
  height: 48px;
  width: 48px;
  justify-content: center;
  padding-right: 1px;
`;

export const LogOutText = styled.Text`
  font-size: ${Dimensions.get("window").width / 20}px;
  font-family: ${theme.fonts.Roboto50_Medium};
  color: #707070;
`;

export const DefaultButtonContainer = styled.View`
  justify-content: center;
`;

export const DefaultButtontText = styled.Text`
  font-size: ${Dimensions.get("window").width / 20}px;
  font-family: ${theme.fonts.Roboto50_Medium};
  color: #707070;
`;
