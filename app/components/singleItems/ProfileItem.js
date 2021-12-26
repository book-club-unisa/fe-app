import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

function ProfileItem({ profileName, profileEmail, profileSurname }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <MaterialCommunityIcons name="account" size={25} style={styles.icon} />
        <Text style={styles.text}>{profileName}</Text>
      </View>

      <View style={styles.textContainer}>
        <MaterialCommunityIcons name="account" size={25} style={styles.icon} />
        <Text style={styles.text}>{profileSurname}</Text>
      </View>

      <View style={styles.textContainer}>
        <MaterialCommunityIcons name="email" size={25} style={styles.icon} />
        <Text style={styles.text}>{profileEmail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  textContainer: {
    width: "90%",
    backgroundColor: colors.lightgrey,
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: colors.mediumgrey,
    fontWeight: "bold",
  },
  icon: {
    margin: 10,
    color: colors.mediumgrey,
  },
});

export default ProfileItem;
