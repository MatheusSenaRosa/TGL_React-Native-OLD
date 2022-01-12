import { Alert } from "react-native";
import { saveCartConfig } from "@shared/services/endpoints";
import { ADD_TO_CART, DELETE_FROM_CART, SAVE_CART } from "@store/actions/cart";

type State = {
  itemsToSave: { game_id: number; numbers: number[] }[];
  itemsToList: {
    id: number;
    type: string;
    color: string;
    price: number;
    numbers: number[];
  }[];
};

type Action = {
  type: string;
  itemToSave: { game_id: number; numbers: number[] };
  itemToList: {
    id: number;
    type: string;
    color: string;
    price: number;
    numbers: number[];
  };
  itemToDelete: { id: number; numbers: number[] };
};

export default (
  state: State = { itemsToSave: [], itemsToList: [] } as State,
  action: Action
) => {
  switch (action.type) {
    //Adiciona ao carrinho
    case ADD_TO_CART:
      return {
        itemsToSave: [...state.itemsToSave, { ...action.itemToSave }],
        itemsToList: [...state.itemsToList, { ...action.itemToList }],
      };

    //Deleta do carrinho
    case DELETE_FROM_CART:
      let newItemsToSave = [...state.itemsToSave];
      let newItemsToList = [...state.itemsToList];

      let indexToDelete = state.itemsToList.findIndex(
        (item) =>
          item.numbers.join(",") === action.itemToDelete.numbers.join(",") &&
          item.id === action.itemToDelete.id
      );

      newItemsToSave.splice(indexToDelete, 1);
      newItemsToList.splice(indexToDelete, 1);

      return {
        ...state,
        itemsToSave: [...newItemsToSave],
        itemsToList: [...newItemsToList],
      };

    //Salva o carrinho
    case SAVE_CART:
      saveCartConfig([...state.itemsToSave]);

      Alert.alert("Success!!", `Your bets has been saved.`, [
        { text: "Close", style: "destructive" },
      ]);

      return {
        itemsToSave: [],
        itemsToList: [],
      };
  }
  return state;
};
