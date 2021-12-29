import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable title={title} onPress={onPress} style={styles.buttonLogin}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },

  buttonLogin: {
    width: "50%",
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.azzurro,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export default AppButton;
