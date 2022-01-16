/* eslint-disable react/prop-types */
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function BCIconItem({
  backgroundIconColor = colors.green,
  title,
  onPress,
  iconName = "close",
  containerSize = 100,
  iconColor = colors.white,
  styleContainer,
}) {
  return (
    <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
      <View style={[styles.container, styleContainer]}>
        <View
          style={{
            width: containerSize,
            height: containerSize,
            borderRadius: containerSize / 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: backgroundIconColor,
          }}
        >
          <MaterialCommunityIcons
            name={iconName}
            size={containerSize * 0.5}
            color={iconColor}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.lightgrey,
  },

  details: {
    paddingLeft: 10,
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default BCIconItem;
