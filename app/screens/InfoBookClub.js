import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
} from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import UserListItem from "../components/singleItems/UserListItem";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import BCAppFormField from "../components/BCAppFormField";
import * as Progress from "react-native-progress";
import UserState from "../components/singleItems/UserState";
import { Colors } from "react-native/Libraries/NewAppScreen";
import NumericInput from "react-native-numeric-input";

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

function InfoBookClub(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.bookContainer}>
          <Image
            source={require("../assets/lotr1.jpg")}
            style={styles.copertina}
          />
          <View style={styles.description}>
            <Text style={styles.boldtitle} numberOfLines={1}>
              Nome book club
            </Text>
            <Text numberOfLines={1}>Appassionati Tolkeniani</Text>
            <Text numberOfLines={1}></Text>

            <Text style={styles.boldtitle} numberOfLines={1}>
              Fondatore
            </Text>
            <Text numberOfLines={1}>Michele Bisaccia</Text>
          </View>
        </View>

        <Text style={styles.txt}> Partecipanti </Text>

        <FlatList
          style={{ marginBottom: 55 }}
          data={Users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <UserState
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
      <View style={styles.barre}>
        <View style={styles.bar}>
          <View style={styles.allinea}>
            <View style={{ marginRight: 20 }}>
              <Text style={styles.txt}> Obiettivo Di Lettura </Text>
              <Progress.Bar
                progress={0.6}
                width={200}
                height={15}
                borderRadius={7}
                borderWidth={0}
                unfilledColor={colors.azzurrochiaro}
              />
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
              <Progress.Bar
                progress={0.8}
                width={200}
                height={15}
                borderRadius={7}
                borderWidth={0}
                unfilledColor={colors.azzurrochiaro}
              />
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

export default InfoBookClub;
