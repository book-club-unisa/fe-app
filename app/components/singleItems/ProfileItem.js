import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

// eslint-disable-next-line react/prop-types
function ProfileItem({ profileName, profileEmail, profileSurname }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titolo}> Nome </Text>
      </View>
      <View style={styles.textContainer}>
        <MaterialCommunityIcons name="account" size={25} style={styles.icon} />
        <Text style={styles.text}>{profileName}</Text>
      </View>

      <View>
        <Text style={styles.titolo}> Cognome </Text>
      </View>
      <View style={styles.textContainer}>
        <MaterialCommunityIcons name="account" size={25} style={styles.icon} />
        <Text style={styles.text}>{profileSurname}</Text>
      </View>

      <View>
        <Text style={styles.titolo}> Email </Text>
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
  icon: {
    margin: 10,
    color: colors.mediumgrey,
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
  titolo: {
    color: colors.mediumgrey,
  },
});

export default ProfileItem;
