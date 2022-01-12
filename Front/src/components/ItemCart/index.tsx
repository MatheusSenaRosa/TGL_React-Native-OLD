import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  ColoredDiviser,
  Container,
  TrashArea,
  TouchableTrash,
  Content,
  NumbersText,
  NamePriceView,
  NameText,
  PriceText,
} from "./styles";

import convertMonetaryValue from "@shared/helpers/convertMonetaryValue";

type Props = {
  numbers: number[];
  color: string;
  type: string;
  price: number;
  onDelete: () => void;
};

const ItemCart = ({ numbers, color, price, type, onDelete }: Props) => {
  return (
    <Container>
      <TouchableTrash>
        <TouchableNativeFeedback onPress={onDelete}>
          <TrashArea>
            <Ionicons name="md-trash-outline" color={"#888888"} size={30} />
          </TrashArea>
        </TouchableNativeFeedback>
      </TouchableTrash>
      <ColoredDiviser color={color} />
      <Content>
        <NumbersText>{numbers.join(", ")}</NumbersText>
        <NamePriceView>
          <NameText color={color}>{type}</NameText>
          <PriceText>R$ {convertMonetaryValue(price)}</PriceText>
        </NamePriceView>
      </Content>
    </Container>
  );
};

export default ItemCart;
