import React from "react";
import { FlatList, View, StyleSheet, Text, Image, Alert } from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import * as Progress from "react-native-progress";
import InviteState from "../components/singleItems/InviteState";
import NumericInput from "react-native-numeric-input";
import ProgressBar from "../components/singleItems/ProgressBar";
import AppButton from "../components/AppButton";

const Users = [
  {
    id: 1,
    name: "giovanna243@hotmail.it",
    image: require("../assets/users/1.png"),
    inviteState: 0,
  },

  {
    id: 2,
    name: "alfonso.m@gmail.com",
    image: require("../assets/users/2.png"),
    inviteState: 2,
  },

  {
    id: 3,
    name: "lucia.rossi12@gmail.it",
    image: require("../assets/users/3.png"),
    inviteState: 1,
  },

  {
    id: 4,
    name: "user536@unisa.it",
    image: require("../assets/users/4.png"),
    inviteState: 0,
  },
];

function BookClubInvites({ route }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.bookContainer}>
          <Image source={route.params.image} style={styles.copertina} />
          <View style={styles.description}>
            <Text style={styles.boldtitle} numberOfLines={1}>
              {route.params.value}
            </Text>
            <Text numberOfLines={1}>Il tuo Book Blub</Text>
          </View>
        </View>

        <Text style={styles.txt}>Stato dei tuoi inviti </Text>

        <FlatList
          style={{ marginBottom: 55 }}
          data={Users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <InviteState
              title={item.name}
              image={item.image}
              state={item.inviteState}
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

  bar: {
    marginBottom: 15,
    alignSelf: "center",
  },

  barre: {
    position: "absolute",
    width: "100%",
    bottom: 30,
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
    margin: 40,
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
    marginTop: 40,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },
});

export default BookClubInvites;
