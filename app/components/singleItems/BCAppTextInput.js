import React from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyle from "../../config/styles";

// eslint-disable-next-line react/prop-types
function BCAppTextInput({ iconName, width = "100%", ...otherProps }) {
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
        placeholderTextColor={defaultStyle.colors.mediumgrey}
        style={[defaultStyle.text, styles.text]}
        {...otherProps}
      />

      <Pressable onPress={() => console.log(1)}>
        {
          <FontAwesome5
            name="search"
            size={18}
            color={colors.mediumgrey}
            style={styles.icon}
          />
        }
      </Pressable>
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

export default BCAppTextInput;
