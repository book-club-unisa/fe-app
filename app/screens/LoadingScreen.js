import React from "react";
import { View, StyleSheet } from "react-native";
import AppActivityIndicator from "../components/AppActivityIndicator";
import Screen from "../components/Screen";

function LoadingScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppActivityIndicator
          visible={true}
          source={require("../assets/animations/circle.json")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;
