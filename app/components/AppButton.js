import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import PropTypes from "prop-types";

AppButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  styleButton: PropTypes.any,
  styleButtonContainer: PropTypes.any,
};

function AppButton({ title, onPress, styleButton, styleButtonContainer }) {
  return (
    <View style={[styles.container, styleButtonContainer]}>
      <Pressable
        title={title}
        onPress={onPress}
        style={[styles.buttonLogin, styleButton]}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: colors.white,
    //marginVertical: 20,
    alignItems: "center",
    //justifyContent: "center",
  },

  buttonLogin: {
    width: "50%",
    height: 50,
    borderRadius: 30,
    backgroundColor: colors.blu,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
