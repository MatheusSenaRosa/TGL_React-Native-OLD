import { SET_NOT_LOGGED } from "@store/actions/userAuth";
import { SET_IS_LOGGED } from "@store/actions/userAuth";

const initialState = {
  isLogged: false,
};

export default (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case SET_IS_LOGGED:
      return {
        isLogged: true,
      };

    case SET_NOT_LOGGED:
      return {
        isLogged: false,
      };
  }
  return state;
};
