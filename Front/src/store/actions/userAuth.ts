export const SET_IS_LOGGED = "SET_IS_LOGGED";
export const SET_NOT_LOGGED = "SET_NOT_LOGGED";

export const setIsLogged = () => {
  return {
    type: SET_IS_LOGGED,
  };
};

export const setNotLogged = () => {
  return {
    type: SET_NOT_LOGGED,
  };
};
