import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import ProfileItem from "../components/singleItems/ProfileItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function ProfilePage({
  profileName,
  profilePassword,
  profileEmail,
  profileSurname,
}) {
  return (
    <Screen styleChildren={styles.container}>
      <View style={styles.subContainer}>
        <MaterialCommunityIcons
          name="account-circle"
          size={150}
          style={styles.profilePic}
        />
        <ProfileItem
          profileName={profileName}
          profileSurname={profileSurname}
          profileEmail={profileEmail}
          profilePassword={profilePassword}
        />
      </View>
      <View style={styles.buttonsUtility}>
        <Pressable
          title="Impostazioni"
          color="colors.secondary"
          onPress={console.log(1)}
          style={styles.buttonLogin}
        >
          <Ionicons name="settings" size={24} style={styles.icon} />
          <Text style={styles.settings}>Impostazioni</Text>
        </Pressable>

        <Pressable
          title="Impostazioni"
          color="colors.secondary"
          onPress={console.log(1)}
          style={styles.buttonLogin}
        >
          <Ionicons
            name="ios-shield-checkmark-sharp"
            size={24}
            style={styles.icon}
          />
          <Text style={styles.settings}>Sicurezza</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  subContainer: {
    alignItems: "center",
  },

  profilePic: {
    color: colors.blu,
    marginVertical: 30,
  },

  buttonLogin: {
    width: "90%",
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    margin: 2,
  },
  icon: {
    marginHorizontal: 10,
    color: colors.blu,
  },
  settings: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: colors.blu,
  },

  buttonsUtility: {
    alignItems: "center",
    marginTop: "20%",
  },
});

export default ProfilePage;
