import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import InfoBookClubFounder from "../screens/InfoBookClubFounder";
import InfoBookClubUser from "../screens/InfoBookClubUser";
import BookClubInvites from "../screens/BookClubInvites";
import BachecaSelection from "../screens/BachecaSelection";

const Stack = createStackNavigator();

const ClubNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="BachecaSelection" component={BachecaSelection} />
    <Stack.Screen name="infoBCFounder" component={InfoBookClubFounder} />
    <Stack.Screen name="infoBCUtente" component={InfoBookClubUser} />
    <Stack.Screen name="BCInvites" component={BookClubInvites} />
  </Stack.Navigator>
);

export default ClubNavigator;
