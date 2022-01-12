import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, NewBet, Account } from "@screens/index";
const { Navigator, Screen } = createStackNavigator();

const LoggedInRoutes = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="NewBet" component={NewBet} />
      <Screen name="Account" component={Account} />
    </Navigator>
  );
};

export default LoggedInRoutes;
