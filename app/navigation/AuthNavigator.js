import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import InitialPage from "../screens/InitialPage";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="InitialPage" component={InitialPage} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Clubs" component={AppNavigator} />
  </Stack.Navigator>
);

export default AuthNavigator;
