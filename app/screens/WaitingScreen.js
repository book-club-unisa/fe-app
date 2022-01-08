import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppActivityIndicator from "../components/AppActivityIndicator";
import Screen from "../components/Screen";

function WaitingScreen(visible = false) {
  return (
    <Screen>
      <View style={styles.container}></View>
      <AppActivityIndicator
        visible={visible}
        source={require("../assets/animations/chargeBar1.json")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    bottom: 100,
  },
});

export default WaitingScreen;
