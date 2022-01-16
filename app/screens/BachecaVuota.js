import React, { Component } from "react";
import { Text, StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default class BachecaVuota extends Component {
  render() {
    return (
      <Screen styleChildren={styles.container}>
        <Image
          style={styles.bgImage}
          source={require("../assets/bachecavuota.jpg")}
        />
        <Text style={styles.text}>
          Al momento non partecipi a nessun bookclub.
        </Text>
      </Screen>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 25,
    color: colors.black,
    textAlign: "center",
  },
  container: {
    //justifyContent: "center",
    alignItems: "center",
  },

  bgImage: {
    width: "70%",
    height: "50%",
  },
});
