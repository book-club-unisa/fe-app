import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Catalogo from "../screens/Catalogo";
import PaginaCreazioneBC from "../screens/PaginaCreazione";
import BookClubInvites from "../screens/BookClubInvites";
import Bacheca from "../screens/Bacheha";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Catalogo" component={Catalogo} />
    <Stack.Screen name="infoLibro" component={PaginaCreazioneBC} />
    <Stack.Screen name="Inviti" component={BookClubInvites} />
  </Stack.Navigator>
);

export default FeedNavigator;

/**
 * const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="" /> qua va messo Bacheca -> infoBookClub
    
  </Stack.Navigator>
); */
