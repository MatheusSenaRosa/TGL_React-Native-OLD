import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { LogIn, ResetPassword, SignUp } from "@screens/index";
const { Navigator, Screen } = createStackNavigator();

const NoLoggedRoutes = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="LogIn" component={LogIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ResetPassword" component={ResetPassword} />
    </Navigator>
  );
};

export default NoLoggedRoutes;
