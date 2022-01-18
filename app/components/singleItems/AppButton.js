import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import PropTypes from "prop-types";

function AppButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable title={title} onPress={onPress} style={styles.buttonLogin}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

AppButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonLogin: {
    width: "100%",
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
