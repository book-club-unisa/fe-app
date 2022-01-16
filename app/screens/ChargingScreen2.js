import React from "react";
import { StyleSheet } from "react-native";
import AppActivityIndicator from "../components/AppActivityIndicator";
import Screen from "../components/Screen";

function ChargingScreen1() {
  return (
    <Screen styleChildren={styles.container}>
      <AppActivityIndicator
        visible={true}
        source={require("../assets/animations/verifiedSign4.json")}
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
