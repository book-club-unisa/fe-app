import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "./app/components/Screen";
import Bacheca from "./app/screens/Bacheca";
import Catalogo from "./app/screens/Catalogo";
import LoginScreen from "./app/screens/LoginScreen";
import PaginaCreazioneBC from "./app/screens/PaginaCreazione";
import ProfilePage from "./app/screens/ProfilePage";
import RegisterScreen from "./app/screens/RegisterScreen";
import InfoLibro from "./app/screens/InfoLibro";
import InfoBookClubFounder from "./app/screens/InfoBookClubFounder";
import InfoBookClubUser from "./app/screens/InfoBookClubUser";
import BookClubInvites from "./app/screens/BookClubInvites";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import colors from "./app/config/colors";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import InvitiRicevuti from "./app/screens/InvitiRicevuti";
import Sicurezza from "./app/screens/Sicurezza";
import ChiSiamo from "./app/screens/ChiSiamo";
import AppActivityIndicator from "./app/components/AppActivityIndicator";
import ChargingScreen1 from "./app/screens/ChargingScreen1";
import ChargingScreen2 from "./app/screens/ChargingScreen2";
import InitialPage from "./app/screens/InitialPage";
import InvitaUtenti from "./app/screens/InvitaUtenti";
import { useState } from "react";
import AuthContext from "./app/auth/context";

export default function App() {
  const [token, setToken] = useState();

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <NavigationContainer theme={NavigationTheme}>
        {token ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

//Per ProfilePage è necessario dare dei valori da passare al component

/**
 * <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
 */
/**
 * <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
 */
const styles = StyleSheet.create({});
