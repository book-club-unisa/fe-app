import React, { useState, useContext, useEffect } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import UserListItem from "../components/singleItems/UserListItem";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import BCAppFormField from "../components/BCAppFormField";
import routes from "../navigation/routes";
import { FontAwesome5 } from "@expo/vector-icons";
import useApi from "../api/api";
import AuthContext from "../auth/context";

import { Ionicons } from "@expo/vector-icons";

function InfoLibro({ route, navigation }) {
  const { token, setToken } = useContext(AuthContext);

  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [BC_ID, setBC_ID] = useState();
  const [ready, setReady] = useState(0);

  const { inviteUserToBookClub } = useApi(token);
  const { getBCInvites } = useApi(token);
  const { getUserDataByToken } = useApi(token);
  const { getBC_ID } = useApi(token);

  useEffect(() => {
    getUserData();
    //getBookClubID();
  }, []);

  /*
  useEffect(() => {
    seeInvites();
  }, []);
  */

  /*
  function getBookClubID() {
    console.log("Nome BC:", route.params.value);
    console.log("email", email);
  }
  */

  function Invite() {
    console.log(BC_ID);
    console.log(text);
    inviteUserToBookClub(BC_ID, text)
      .then(function (result) {
        console.log("ok Invite");
      })
      .catch(function (error) {
        console.log("errore Invite");
        console.error(error);
      });
  }

  function getUserData() {
    getUserDataByToken()
      .then(function ({ email, firstName, lastName }) {
        console.log("ok getUserData");
        console.log(email, firstName, lastName);
        setEmail(email);
        setName(firstName);
        setSurname(lastName);
        getBC_ID(route.params.value, email)
          .then(function (id) {
            setBC_ID(id);
            console.log("ok getBookClubID");
          })
          .catch(function (error) {
            console.log("errore getBookClubID");
            console.error(error);
          });
      })
      .catch(function (err) {
        console.log("errore getUserData");
        console.error(err);
      });
  }

  function seeInvites() {
    getBCInvites(BC_ID)
      .then(function (invites) {
        setUsers(invites);
        console.log(invites);
        console.log("ok seeInvites");
      })
      .catch(function (error) {
        //console.log(token);
        console.log("errore seeInvites");
        console.error(error);
      });
  }

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.bookContainer}>
          <Image
            source={{ uri: route.params.coverUrl }}
            style={styles.copertina}
          />
          <View style={styles.description}>
            <Text style={styles.boldtitle} numberOfLines={1}>
              Nome book club
            </Text>
            <Text numberOfLines={1}>{route.params.value}</Text>
            <Text numberOfLines={1}></Text>

            <Text style={styles.boldtitle} numberOfLines={1}>
              Fondatore Book Club
            </Text>
            <Text numberOfLines={1}>{[name, " ", surname]}</Text>

            <Pressable
              title="Refresh"
              color={colors.red}
              onPress={() => seeInvites()}
              style={styles.buttonRefresh}
            >
              <Ionicons
                name="ios-refresh-circle"
                size={30}
                style={styles.refreshIcon}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <AppTextInput
            onChangeText={(text) => setText(text)}
            placeholder="Invita un utente"
            style={styles.textInput}
          />

          <Pressable
            color={colors.red}
            onPress={(BC_ID, text) => {
              Invite(BC_ID, text);
            }}
            style={styles.buttonLogout}
          >
            <FontAwesome5 name="user-plus" size={20} color="white" />
          </Pressable>
        </View>

        <FlatList
          style={{ marginBottom: 55 }}
          data={users}
          keyExtractor={(user) => user.inviteId.toString()}
          renderItem={({ item }) => (
            <UserListItem
              title={item.user}
              onPress={() => alert("email: " + item.user)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.button}>
        <AppButton
          title="Fine"
          onPress={() => navigation.navigate(routes.BACHECA)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  boldtitle: {
    fontWeight: "bold",
    color: colors.blu,
    textTransform: "uppercase",
  },

  bookContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },

  button: {
    position: "absolute",
    width: "100%",
    bottom: 10,
  },

  container: {
    marginVertical: 10,
    overflow: "hidden",
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },

  copertina: {
    width: 104,
    height: 160,
    borderRadius: 5,
  },

  description: {
    marginTop: 10,
    marginHorizontal: 20,
    overflow: "hidden",
  },

  title: {
    marginVertical: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  txt: {
    marginVertical: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },

  refreshIcon: {
    marginHorizontal: 10,
    color: colors.blu,
  },

  buttonRefresh: {
    position: "absolute",
    alignSelf: "flex-end",
    height: 60,
    borderRadius: 30,
    //alignItems: "center",
    // justifyContent: "center",
    //flexDirection: "row",
    //margin: 2,
    zIndex: 100,
  },

  txtButton: {
    marginVertical: 5,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  textInput: {
    width: "80%",
    height: 50,
  },

  buttonIcon: {
    backgroundColor: colors.blu,
  },

  buttonLogout: {
    height: 50,
    width: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 10,
    backgroundColor: colors.blu,
  },
});

export default InfoLibro;
