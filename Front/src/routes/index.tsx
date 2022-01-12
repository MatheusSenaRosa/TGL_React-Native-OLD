import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as UserAuthActions from "@store/actions/userAuth";
import LoggedInRoutes from "./LoggedIn.routes";
import NoLoggedRoutes from "./NoLoggedRoutes.routes";

const Routes = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector(
    (state: { userAuth: { isLogged: boolean } }) => state.userAuth.isLogged
  );

  useEffect(() => {
    const getToken = async () => {
      const response = await AsyncStorage.getItem("@token");
      if (response) {
        dispatch(UserAuthActions.setIsLogged());
      }
    };

    getToken();
  }, []);

  return (
    <NavigationContainer>
      {isLogged ? <LoggedInRoutes /> : <NoLoggedRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
