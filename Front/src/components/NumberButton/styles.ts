import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const TouchableCircle = styled.View`
  overflow: hidden;
  border-radius: ${Dimensions.get("window").width / 3.5}px;
`;

export const Container = styled.View<{ color: string; active: boolean }>`
  margin: ${Dimensions.get("window").width / 90}px;
  width: ${Dimensions.get("window").width / 7}px;
  height: ${Dimensions.get("window").width / 7}px;
  border-radius: ${Dimensions.get("window").width / 14}px;
  background-color: ${({ active, color }) =>
    active ? color : "rgba(173, 192, 196, 1)"};
  align-items: center;
  justify-content: center;
`;

export const Number = styled.Text`
  color: #ffffff;
  font-size: ${Dimensions.get("window").width / 20}px;
  font-family: Roboto_700Bold;
`;
