import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyle from "../config/styles";

function AppTextInput({ iconName, width = "100%", ...otherProps }) {
  return (
    <View style={[{ width }, styles.container]}>
      {
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.mediumgrey}
          style={styles.icon}
        />
      }
      <TextInput
        placeholderTextColor={colors.mediumgrey}
        style={[defaultStyle.text, styles.text]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    margin: 10,
  },

  text: {
    flex: 1,
  },
});

export default AppTextInput;
