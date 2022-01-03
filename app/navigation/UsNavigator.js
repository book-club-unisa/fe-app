import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChiSiamo from "../screens/ChiSiamo";
import ProfilePage from "../screens/ProfilePage";
import Sicurezza from "../screens/Sicurezza";

const Stack = createStackNavigator();

const UsNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Profilo" component={ProfilePage} />
    <Stack.Screen name="ChiSiamo" component={ChiSiamo} />
    <Stack.Screen name="Sicurezza" component={Sicurezza} />
  </Stack.Navigator>
);

export default UsNavigator;
