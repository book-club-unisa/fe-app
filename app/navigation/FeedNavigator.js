import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Catalogo from "../screens/Catalogo";
import Ricerca from "../screens/Ricerca";
import PaginaCreazioneBC from "../screens/PaginaCreazione";
import InfoLibro from "../screens/InfoLibro";
import InvitaUtenti from "../screens/InvitaUtenti";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Catalogo" component={Catalogo} />
    <Stack.Screen name="Ricerca" component={Ricerca} />
    <Stack.Screen name="CreazioneBC" component={PaginaCreazioneBC} />
    <Stack.Screen name="InfoLibro" component={InfoLibro} />
    <Stack.Screen name="InvitaUtenti" component={InvitaUtenti} />
  </Stack.Navigator>
);

export default FeedNavigator;

/**
 * const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="" /> qua va messo Bacheca -> infoBookClub
    
  </Stack.Navigator>
); */
