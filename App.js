import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import Bacheca from "./app/screens/Bacheha";
import Catalogo from "./app/screens/Catalogo";
import LoginScreen from "./app/screens/LoginScreen";
import PaginaCreazioneBC from "./app/screens/PaginaCreazione";
import ProfilePage from "./app/screens/ProfilePage";
import RegisterScreen from "./app/screens/RegisterScreen";
import InvitaUtenti from "./app/screens/InvitaUtenti";
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

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

//Per ProfilePage è necessario dare dei valori da passare al component

const styles = StyleSheet.create({});
