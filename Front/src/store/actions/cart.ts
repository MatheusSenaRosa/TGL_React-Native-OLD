export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const SAVE_CART = "SAVE_CART";

export const addToCartAction = (
  itemToSave: {
    game_id: number;
    numbers: number[];
  },
  itemToList: {
    id: number;
    type: string;
    color: string;
    price: number;
    numbers: number[];
  }
) => {
  return {
    type: ADD_TO_CART,
    itemToSave: { ...itemToSave },
    itemToList: { ...itemToList },
  };
};

export const deleteFromCart = (id: number, numbers: number[]) => {
  return {
    type: DELETE_FROM_CART,
    itemToDelete: { id: id, numbers: numbers },
  };
};

export const saveCart = () => {
  return {
    type: SAVE_CART,
  };
};
