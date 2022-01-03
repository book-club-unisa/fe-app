import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import UserListItem from "../components/singleItems/UserListItem";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import BCAppFormField from "../components/BCAppFormField";

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

function InvitaUtenti({ route }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.bookContainer}>
          <Image source={route.params.image} style={styles.copertina} />
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

        <Text style={styles.txt}> Aggiungi i tuoi amici </Text>

        <FlatList
          style={{ marginBottom: 55 }}
          data={Users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <UserListItem
              title={item.name}
              image={item.image}
              onPress={() =>
                Alert.alert("title", "Messaggio", [
                  { text: "Ok", onPress: () => console.log(item.title) },
                ])
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.button}>
        <AppButton title="Fine" />
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
    marginHorizontal: 40,
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
});

export default InvitaUtenti;
