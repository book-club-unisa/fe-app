import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
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

function PaginaCreazioneBC(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.BookContainer}>
          <Image
            source={require("../assets/lotr1.jpg")}
            style={styles.copertina}
          />
          <View style={styles.description}>
            <Text style={styles.blodtitle} numberOfLines={1}>
              Nome book club
            </Text>
            <Text numberOfLines={1}>Appassionati Tolkeniani</Text>
            <Text numberOfLines={1}></Text>

            <Text style={styles.blodtitle} numberOfLines={1}>
              Fondatore
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
      <View
        style={{
          position: "absolute",
          width: "100%",
          bottom: 15,
        }}
      >
        <AppButton title="Fine" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    overflow: "hidden",
    margin: 40,
    flex: 1,
    justifyContent: "center",
  },
  textInput: {},

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

  BookContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
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

  blodtitle: {
    fontWeight: "bold",
    color: colors.azzurro,
    textTransform: "uppercase",
  },
});

export default PaginaCreazioneBC;
