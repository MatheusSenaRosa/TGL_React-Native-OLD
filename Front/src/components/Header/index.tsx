import React from "react";
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { StackActions, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  LogOutContainer,
  LogOutText,
  DefaultButtonContainer,
  DefaultButtontText,
  CartContainer,
  TouchableCart,
  QuantityContainer,
  QuantityText,
} from "./styles";

import LogoHeader from "@components/LogoHeader";
import * as UserAuthActions from "@store/actions/userAuth";

type Props = {
  btnLeft: string;
  btnRight: string;
  numberItemsCart?: number;
  cartVisibleFunction?: () => void;
};

const Header = ({
  btnLeft,
  btnRight,
  cartVisibleFunction,
  numberItemsCart,
}: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const removeToken = async () => {
    await AsyncStorage.removeItem("@token");
    dispatch(UserAuthActions.setNotLogged());
  };

  const buttonToRender = (btnParam: string) => {
    switch (btnParam) {
      case "Cart":
        return (
          <TouchableCart>
            <TouchableNativeFeedback onPress={cartVisibleFunction}>
              <CartContainer>
                <QuantityContainer>
                  <QuantityText>{numberItemsCart}</QuantityText>
                </QuantityContainer>

                <Feather name="shopping-cart" size={25} color={"#707070"} />
              </CartContainer>
            </TouchableNativeFeedback>
          </TouchableCart>
        );

      case "Log Out":
        return (
          <TouchableWithoutFeedback onPress={removeToken}>
            <LogOutContainer>
              <Feather
                name="arrow-left"
                size={20}
                color={"#707070"}
                style={{ marginRight: 5, marginTop: 2 }}
              />
              <LogOutText>Log Out</LogOutText>
            </LogOutContainer>
          </TouchableWithoutFeedback>
        );
      case "HomeOfAccountPage":
        return (
          <TouchableWithoutFeedback
            onPress={() => navigation.dispatch(StackActions.replace("Home"))}
          >
            <DefaultButtonContainer style={{ marginRight: 20 }}>
              <DefaultButtontText>Home</DefaultButtontText>
            </DefaultButtonContainer>
          </TouchableWithoutFeedback>
        );
      default:
        return (
          <TouchableWithoutFeedback
            onPress={() => navigation.dispatch(StackActions.replace(btnParam))}
          >
            <DefaultButtonContainer>
              <DefaultButtontText>{btnParam}</DefaultButtontText>
            </DefaultButtonContainer>
          </TouchableWithoutFeedback>
        );
    }
  };

  return (
    <Container>
      {buttonToRender(btnLeft)}
      <LogoHeader />

      {buttonToRender(btnRight)}
    </Container>
  );
};

export default Header;
