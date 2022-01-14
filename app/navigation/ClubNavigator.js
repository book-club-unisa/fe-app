import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Bacheca from "../screens/Bacheca";
import InfoBookClubFounder from "../screens/InfoBookClubFounder";
import InfoBookClubUser from "../screens/InfoBookClubUser";
import BookClubInvites from "../screens/BookClubInvites";

const Stack = createStackNavigator();

const ClubNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Bacheca" component={Bacheca} />
    <Stack.Screen name="infoBCFounder" component={InfoBookClubFounder} />
    <Stack.Screen name="infoBCUtente" component={InfoBookClubUser} />
    <Stack.Screen name="BCInvites" component={BookClubInvites} />
  </Stack.Navigator>
);

export default ClubNavigator;
