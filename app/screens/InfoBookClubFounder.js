import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  Pressable,
} from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import * as Progress from "react-native-progress";
import UserState from "../components/singleItems/UserState";
import NumericInput from "react-native-numeric-input";
import ProgressBar from "../components/singleItems/ProgressBar";
import { FontAwesome5 } from "@expo/vector-icons";
import routes from "../navigation/routes";

const Users = [
  {
    id: 1,
    name: "giovanna243@hotmail.it",
    image: require("../assets/users/1.png"),
    pdl: 0.6,
  },

  {
    id: 2,
    name: "alfonso.m@gmail.com",
    image: require("../assets/users/2.png"),
    pdl: 0.2,
  },

  {
    id: 3,
    name: "lucia.rossi12@gmail.it",
    image: require("../assets/users/3.png"),
    pdl: 0.8,
  },

  {
    id: 4,
    name: "user536@unisa.it",
    image: require("../assets/users/4.png"),
    pdl: 0.5,
  },
];

function InfoBookClubFounder({ route, navigation }) {
  const item = route.params;

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.bookContainer}>
          <Image source={route.params.image} style={styles.copertina} />
          <View style={styles.description}>
            <Text style={styles.boldtitle} numberOfLines={1}>
              Nome book club
            </Text>
            <Text numberOfLines={1}>{route.params.nomebc}</Text>
            <Text numberOfLines={1}></Text>

            <Text style={styles.boldtitle} numberOfLines={1}>
              Fondatore
            </Text>
            <Text numberOfLines={1}>{route.params.nomeFondatore}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txt}> Partecipanti </Text>
          <Pressable
            onPress={() => navigation.navigate(routes.REVISIONEINVITI, item)}
          >
            <FontAwesome5
              name="user-plus"
              size={20}
              color="black"
              style={{ paddingLeft: "55%" }}
            />
          </Pressable>
        </View>

        <FlatList
          style={{ marginBottom: 55 }}
          data={Users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <UserState
              title={item.name}
              image={item.image}
              personalprogress={item.pdl}
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
      <View style={styles.barre}>
        <View style={styles.bar}>
          <View style={styles.allinea}>
            <View style={{ marginRight: 20 }}>
              <Text style={styles.txt}> Obiettivo Di Lettura </Text>
              <ProgressBar value={0.9} larghezza={200} />
            </View>

            <View style={{ marginTop: 15 }}>
              <NumericInput
                onChange={(value) => console.log(value)}
                minValue={0}
                rounded={true}
                totalWidth={80}
                rightButtonBackgroundColor={colors.blu}
                leftButtonBackgroundColor={colors.azzurrochiaro}
                borderColor={colors.white}
              />
            </View>
          </View>
        </View>

        <View style={styles.bar}>
          <View style={styles.allinea}>
            <View style={{ marginRight: 20 }}>
              <Text style={styles.txt}> Progresso Di Lettura </Text>
              <ProgressBar value={0.2} larghezza={200} />
            </View>

            <View style={{ marginTop: 15 }}>
              <NumericInput
                onChange={(value) => console.log(value)}
                minValue={0}
                rounded={true}
                totalWidth={80}
                rightButtonBackgroundColor={colors.blu}
                leftButtonBackgroundColor={colors.azzurrochiaro}
                borderColor={colors.white}
              />
            </View>
          </View>
        </View>
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
    bottom: 0,
    backgroundColor: colors.white,
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
    marginVertical: 40,
    overflow: "hidden",
    margin: 40,
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
    marginVertical: 5,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },
});

export default InfoBookClubFounder;
