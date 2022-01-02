import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";
import BCListItem from "../components/singleItems/BCListItem";

import colors from "../config/colors";
import Screen from "../components/Screen";

import routes from "../navigation/routes";
import DevItem from "../components/singleItems/DevItem";

const Books = [
  {
    id: 1,
    title: "Alessia Amato",
    description: "Front-end developer",
    image: require("../assets/devs/ale.jpg"),
  },

  {
    id: 2,
    title: "Alfonso Maddaloni",
    description: "Front-end developer",
    image: require("../assets/devs/alf.jpeg"),
  },

  {
    id: 3,
    title: "Antonio Giordano",
    description: "Front-end developer",
    image: require("../assets/devs/cattura.jpg"),
  },

  {
    id: 4,
    title: "Luca Morelli",
    description: "Front-end developer",
    image: require("../assets/users/1.png"),
  },

  {
    id: 5,
    title: "Enrique Camacho Garcia",
    description: "Back-end developer",
    image: require("../assets/devs/enr.jpeg"),
  },

  {
    id: 6,
    title: "Giuseppe Ragosta",
    description: "Back-end developer",
    image: require("../assets/devs/giu.jpeg"),
  },

  {
    id: 7,
    title: "Marco Palmisciano",
    description: "Back-end developer",
    image: require("../assets/users/3.png"),
  },

  {
    id: 8,
    title: "Marianna Vujko",
    description: "Back-end developer",
    image: require("../assets/users/4.png"),
  },
];
const ChiSiamo = (props) => {
  return (
    <Screen>
      <View></View>
      <View style={styles.tutto}>
        <Text style={styles.titolo}> Chi siamo </Text>
        <Text> Il nostro team di sviluppatori: </Text>
        <View style={styles.container}>
          <FlatList
            data={Books}
            keyExtractor={(book) => book.id.toString()}
            renderItem={({ item }) => (
              <DevItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.yellow,
  },

  itemStyle: {
    padding: 10,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },

  titolo: {
    fontWeight: "bold",
    color: colors.blu,
    fontSize: 20,
  },

  tutto: {
    margin: 10,
    top: 20,
    marginBottom: 150,
  },
});

export default ChiSiamo;
