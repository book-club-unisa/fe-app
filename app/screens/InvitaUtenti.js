import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  Pressable,
  TextInput,
} from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import InviteState from "../components/singleItems/InviteState";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

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
];

function InvitaUtenti({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <AppTextInput
            iconName="book-open-page-variant"
            placeholder="Cerca utenti"
            style={styles.textInput}
          />
        </View>
        <FlatList
          style={{ marginBottom: 55 }}
          data={Users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <InviteState
              title={item.name}
              image={item.image}
              onPress={() =>
                Alert.alert("title", "Messaggio", [
                  { text: "Ok", onPress: () => console.log("1") },
                ])
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />

        <AppButton
          title="INVITA"
          onPress={() =>
            Alert.alert("title", "Messaggio", [
              { text: "Ok", onPress: () => console.log("1") },
            ])
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  allinea: {
    flexDirection: "row",
    alignItems: "center",
  },

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

  container: {
    marginVertical: 10,
    overflow: "hidden",
    margin: 30,
    flex: 1,
    justifyContent: "center",
  },

  copertina: {
    width: 52,
    height: 80,
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
    marginVertical: 5,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },

  title: {
    flexDirection: "row",
    flex: 1,
  },

  textInput: {
    flex: 1,
  },

  searchContainer: {
    marginVertical: 20,
  },
});

export default InvitaUtenti;
