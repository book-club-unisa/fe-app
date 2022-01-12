import React, { useState, useContext, useEffect } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import UserListItem from "../components/singleItems/UserListItem";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import BCAppFormField from "../components/BCAppFormField";
import routes from "../navigation/routes";
import { FontAwesome5 } from "@expo/vector-icons";
import useApi from "../api/api";
import AuthContext from "../auth/context";

import { Ionicons } from "@expo/vector-icons";

const Users = [
  {
    id: 1,
    name: "giovanna243@hotmail.it",
    image: require("../assets/users/1.png"),
  },

  {
    id: 2,
    name: "alfonso.m@gmail.com",
    image: require("../assets/users/2.png"),
  },

  {
    id: 3,
    name: "lucia.rossi12@gmail.it",
    image: require("../assets/users/3.png"),
  },

  {
    id: 4,
    name: "user536@unisa.it",
    image: require("../assets/users/4.png"),
  },
  {
    id: 5,
    name: "giovanna243@hotmail.it",
    image: require("../assets/users/1.png"),
  },

  {
    id: 6,
    name: "alfonso.m@gmail.com",
    image: require("../assets/users/2.png"),
  },

  {
    id: 7,
    name: "lucia.rossi12@gmail.it",
    image: require("../assets/users/3.png"),
  },

  {
    id: 8,
    name: "user536@unisa.it",
    image: require("../assets/users/4.png"),
  },
];

const fondatore = "Michele Bisaccia";

function InfoLibro({ route, navigation }) {
  const { token, setToken } = useContext(AuthContext);

  const [text, setText] = useState("");

  const { inviteUserToBookClub } = useApi(token);
  const BC_ID = 23;

  function Invite() {
    console.log(BC_ID);
    console.log(text);
    inviteUserToBookClub(BC_ID, text)
      .then(function (result) {
        console.log(1);
      })
      .catch(function (error) {
        console.log(token);
        console.error(error);
      });
  }

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.bookContainer}>
          <Image
            source={{ uri: route.params.coverUrl }}
            style={styles.copertina}
          />
          <View style={styles.description}>
            <Text style={styles.boldtitle} numberOfLines={1}>
              Nome book club
            </Text>
            <Text numberOfLines={1}>{route.params.value}</Text>
            <Text numberOfLines={1}></Text>

            <Text style={styles.boldtitle} numberOfLines={1}>
              Fondatore Book Club
            </Text>
            <Text numberOfLines={1}>Michele Bisaccia</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <AppTextInput
            onChangeText={(text) => setText(text)}
            placeholder="Invita un utente"
            style={styles.textInput}
          />

          <Pressable
            color={colors.red}
            onPress={(BC_ID, text) => Invite(BC_ID, text)}
            style={styles.buttonLogout}
          >
            <FontAwesome5 name="user-plus" size={20} color="white" />
          </Pressable>
        </View>

        <FlatList
          style={{ marginBottom: 55 }}
          data={Users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <UserListItem
              title={item.name}
              image={item.image}
              onPress={() => alert("nome: " + item.name)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.button}>
        <AppButton title="Fine" onPress={() => console.log(1)} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  boldtitle: {
    fontWeight: "bold",
    color: colors.blu,
    textTransform: "uppercase",
  },

  bookContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },

  button: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },

  container: {
    marginVertical: 10,
    overflow: "hidden",
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },

  copertina: {
    width: 104,
    height: 160,
    borderRadius: 5,
  },

  description: {
    marginTop: 10,
    marginHorizontal: 20,
    overflow: "hidden",
  },

  title: {
    marginVertical: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  txt: {
    marginVertical: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },

  txtButton: {
    marginVertical: 5,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  textInput: {
    width: "80%",
    height: 50,
  },

  buttonIcon: {
    backgroundColor: colors.blu,
  },

  buttonLogout: {
    height: 50,
    width: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 10,
    backgroundColor: colors.blu,
  },
});

export default InfoLibro;
