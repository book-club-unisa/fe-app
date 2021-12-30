import React from "react";
import { FlatList, View, StyleSheet, Text, Image, Alert } from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import ReceivedInvite from "../components/singleItems/ReceivedInvite";

const Users = [
  {
    id: 1,
    name: "Nome Book Club",
    image: require("../assets/bwl.jpg"),
    inviteState: 0,
  },

  {
    id: 2,
    name: "Nome Book Club",
    image: require("../assets/hpdm.jpg"),
    inviteState: 2,
  },

  {
    id: 3,
    name: "Nome Book Club",
    image: require("../assets/lotr1.jpg"),
    inviteState: 1,
  },

  {
    id: 4,
    name: "Nome Book Club",
    image: require("../assets/hobbit.jpg"),
    inviteState: 0,
  },
];

function InvitiRicevuti(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.txt}> Inviti ricevuti </Text>

        <FlatList
          style={{ marginBottom: 55 }}
          data={Users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <ReceivedInvite
              title={item.name}
              image={item.image}
              inviteState={item.inviteState}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
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

  container: {
    marginVertical: 10,
    overflow: "hidden",
    margin: 30,
    flex: 1,
    justifyContent: "center",
  },

  title: {
    marginVertical: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  txt: {
    marginTop: 60,
    marginBottom: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },
});

export default InvitiRicevuti;
