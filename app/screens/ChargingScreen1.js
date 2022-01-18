import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppActivityIndicator from "../components/AppActivityIndicator";
import Screen from "../components/Screen";

function ChargingScreen1() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require("../assets/BCLogo.png")} style={styles.logo} />
      </View>
      <AppActivityIndicator
        visible={true}
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

export default ChargingScreen1;
