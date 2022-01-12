import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";

import {
  useFonts,
  Roboto_700Bold,
  Roboto_100Thin_Italic,
  Roboto_300Light_Italic,
  Roboto_400Regular_Italic,
  Roboto_500Medium_Italic,
  Roboto_700Bold_Italic,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

import Routes from "./src/routes";
import userAuthReducer from "./src/store/reducers/userAuth";
import cartReducer from "./src/store/reducers/cart";

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin_Italic,
    Roboto_300Light_Italic,
    Roboto_400Regular_Italic,
    Roboto_500Medium_Italic,
    Roboto_700Bold_Italic,
    Roboto_900Black_Italic,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
