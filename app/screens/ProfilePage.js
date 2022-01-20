import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import ProfileItem from "../components/singleItems/ProfileItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import routes from "../navigation/routes";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useApi from "../api/api";
import PropTypes from "prop-types";

ProfilePage.propTypes = {
  navigation: PropTypes.any,
};

function ProfilePage({ navigation }) {
  const { token, setToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  console.log(token);
  const { getUserDataByToken } = useApi(token);

  const handleLogout = () => {
    setToken(null);
    authStorage.removeToken();
  };

  useEffect(() => {
    getUserData();
  }, []);

  function getUserData() {
    getUserDataByToken()
      .then(function ({ email, firstName, lastName }) {
        console.log("ok getUserData");
        console.log(email, firstName, lastName);
        setEmail(email);
        setName(firstName);
        setSurname(lastName);
      })
      .catch(function (err) {
        console.log("error getUserData");
        console.error(err);
      });
  }

  return (
    <Screen styleChildren={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Pressable
            title="Logout"
            color={colors.red}
            onPress={() => handleLogout()}
            style={styles.buttonLogout}
          >
            <Text style={styles.logout}>Esci</Text>
            <Ionicons name="exit-outline" size={25} style={styles.logOutIcon} />
          </Pressable>
          <MaterialCommunityIcons
            name="account-circle"
            size={150}
            style={styles.profilePic}
          />
          <Text style={styles.title}> Il tuo profilo </Text>
          <ProfileItem
            profileName={name}
            profileSurname={surname}
            profileEmail={email}
          />
        </View>
        <View style={styles.buttonsUtility}>
          <Pressable
            title="I tuoi inviti"
            color={colors.blu}
            onPress={() => navigation.navigate(routes.INVITIRICEVUTI)}
            style={styles.buttonLogin}
          >
            <Ionicons name="mail" size={24} style={styles.icon} />
            <Text style={styles.settings}> I tuoi inviti </Text>
          </Pressable>

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
      </ScrollView>
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
    flexDirection: "row",
    margin: 2,
  },

  buttonLogout: {
    position: "absolute",
    alignSelf: "flex-end",
    height: 60,
    borderRadius: 30,
    alignItems: "center",
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

  logOutIcon: {
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

  logout: {
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
