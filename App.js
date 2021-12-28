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

export default function App() {
  return (
    <Screen>
      <InfoBookClubFounder />
    </Screen>
  );
}

//Per ProfilePage è necessario dare dei valori da passare al component

const styles = StyleSheet.create({});
