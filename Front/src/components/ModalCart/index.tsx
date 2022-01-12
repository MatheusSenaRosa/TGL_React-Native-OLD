import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons, Feather } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import {
  Alert,
  FlatList,
  Modal,
  ModalProps,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

import {
  Overlay,
  Container,
  HeaderModal,
  TouchableOverlay,
  Title,
  ListContainer,
  Footer,
  TotalContainer,
  CartText,
  TotalText,
  TextButton,
  TextEmpty,
  TouchableButtonSave,
  SaveButton,
  CircleTouchable,
  CloseIconArea,
} from "./styles";

import ItemCart from "@components/ItemCart";
import * as cartReducer from "@store/actions/cart";
import convertMonetaryValue from "@shared/helpers/convertMonetaryValue";

type Props = ModalProps & {
  minPrice: number;
  onClose: () => void;
};

const ModalCart = ({ minPrice, onClose, ...rest }: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const dataCart = useSelector(
    (reducer: {
      cart: {
        itemsToList: {
          id: number;
          numbers: number[];
          color: string;
          type: string;
          price: number;
        }[];
      };
    }) => reducer.cart.itemsToList
  );

  const deleteBetHandler = (numbers: number[], id: number) => {
    dispatch(cartReducer.deleteFromCart(id, [...numbers]));
  };

  const saveBetsHandler = () => {
    let total = dataCart.reduce((acc, current) => acc + current.price, 0);
    if (total < minPrice) {
      Alert.alert(
        "Invalid value.",
        `The min value is R$ ${convertMonetaryValue(minPrice)}.`,
        [{ text: "Close", style: "destructive" }]
      );
      return;
    }
    dispatch(cartReducer.saveCart());
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("Home"));
    }, 500);
  };

  return (
    <Modal animationType="slide" {...rest} transparent statusBarTranslucent>
      <TouchableWithoutFeedback onPress={onClose}>
        <TouchableOverlay />
      </TouchableWithoutFeedback>
      <Overlay>
        <Container>
          <HeaderModal>
            <CircleTouchable>
              <TouchableNativeFeedback onPress={onClose}>
                <CloseIconArea>
                  <Ionicons
                    name="close"
                    size={40}
                    color={"rgba(255,0,0, .6)"}
                  />
                </CloseIconArea>
              </TouchableNativeFeedback>
            </CircleTouchable>
            <Title>Cart</Title>
          </HeaderModal>
          <ListContainer isEmpty={dataCart.length === 0}>
            {dataCart.length === 0 ? (
              <TextEmpty>Empty</TextEmpty>
            ) : (
              <FlatList
                data={dataCart}
                keyExtractor={(item) => item.numbers.join("")}
                renderItem={({ item }) => (
                  <ItemCart
                    key={Math.random()}
                    numbers={item.numbers}
                    color={item.color}
                    type={item.type}
                    price={item.price}
                    onDelete={() =>
                      deleteBetHandler([...item.numbers], item.id)
                    }
                  />
                )}
              />
            )}
          </ListContainer>
          <Footer>
            <TotalContainer>
              <CartText>CART</CartText>
              <TotalText>
                TOTAL: R${" "}
                {convertMonetaryValue(
                  dataCart.reduce((acc, current) => acc + current.price, 0)
                )}
              </TotalText>
            </TotalContainer>
            <TouchableButtonSave>
              <TouchableNativeFeedback onPress={saveBetsHandler}>
                <SaveButton style={{}}>
                  <TextButton>Save</TextButton>
                  <Feather
                    name="arrow-right"
                    size={27}
                    color={"#27C383"}
                    style={{ marginTop: 5 }}
                  />
                </SaveButton>
              </TouchableNativeFeedback>
            </TouchableButtonSave>
          </Footer>
        </Container>
      </Overlay>
    </Modal>
  );
};

export default ModalCart;
