import React from "react";
import { StyleSheet, View, FlatList, Text, ScrollView } from "react-native";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";
import colors from "../config/colors";
import Screen from "../components/Screen";
import DevItem from "../components/singleItems/DevItem";

const Devs = [
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
    image: require("../assets/devs/LucoMoro.jpeg"),
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
    image: require("../assets/devs/Marco.png"),
  },

  {
    id: 8,
    title: "Marianna Vujko",
    description: "Back-end developer",
    image: require("../assets/devs/Marianna.png"),
  },
];
const ChiSiamo = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Screen>
      <View></View>
      <View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Chi Siamo</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titolo}> Il nostro team di sviluppatori: </Text>
        </View>
        <ScrollView style={styles.container}>
          <FlatList
            data={Devs}
            keyExtractor={(dev) => dev.id.toString()}
            renderItem={({ item }) => (
              <DevItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
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

  /*titolo: {
    fontWeight: "bold",
    color: colors.blu,
    fontSize: 20,
  },*/

  header: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  textHeader: {
    fontSize: 35,
    color: colors.blu,
    fontWeight: "bold",
    flex: 5,
  },
  titolo: {
    fontWeight: "bold",
    color: colors.blu,
    fontSize: 21,
    marginBottom: 2,
  },

  titleContainer: {
    marginHorizontal: 15,
  },
});

export default ChiSiamo;
