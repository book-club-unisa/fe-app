import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import ProfileItem from "../components/singleItems/ProfileItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import routes from "../navigation/routes";

function ProfilePage({
  profileName,
  profilePassword,
  profileEmail,
  profileSurname,
  navigation,
}) {
  return (
    <Screen styleChildren={styles.container}>
      <View style={styles.subContainer}>
        <MaterialCommunityIcons
          name="account-circle"
          size={150}
          style={styles.profilePic}
        />
        <Text style={styles.title}> Il tuo profilo </Text>
        <ProfileItem
          profileName={profileName}
          profileSurname={profileSurname}
          profileEmail={profileEmail}
          profilePassword={profilePassword}
        />
      </View>
      <View style={styles.buttonsUtility}>
        <Pressable
          title="ChiSiamo"
          color={colors.blu}
          onPress={() => navigation.navigate(routes.CHISIAMO)}
          style={styles.buttonLogin}
        >
          <Ionicons name="people-sharp" size={24} style={styles.icon} />
          <Text style={styles.settings}> Chi siamo </Text>
        </Pressable>

        <Pressable
          title="Sicurezza"
          color={colors.blu}
          onPress={() => navigation.navigate(routes.SICUREZZA)}
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

  buttonsUtility: {
    alignItems: "center",
    marginTop: 2,
    marginBottom: 2,
  },

  container: {},

  icon: {
    marginHorizontal: 10,
    color: colors.blu,
  },

  profilePic: {
    color: colors.blu,
    marginTop: 30,
  },

  subContainer: {
    alignItems: "center",
  },

  settings: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: colors.blu,
  },

  title: {
    fontSize: 15,
    marginVertical: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default ProfilePage;
