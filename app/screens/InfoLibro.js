import React, { useState, useContext, useEffect } from "react";
import AwesomeAlert from "react-native-awesome-alerts";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  Pressable,
  Platform,
} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import UserListItem from "../components/singleItems/UserListItem";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import routes from "../navigation/routes";
import { FontAwesome5 } from "@expo/vector-icons";
import useApi from "../api/api";
import AuthContext from "../auth/context";

import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

InfoLibro.propTypes = {
  route: PropTypes.any,
  navigation: PropTypes.any,
};

function InfoLibro({ route, navigation }) {
  const { token } = useContext(AuthContext);

  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [BC_ID, setBC_ID] = useState();
  const [visibleInvite, setVisibleInvite] = useState(false);
  const [visibleInviteError, setVisibleInviteError] = useState(false);
  const [visibleCreate, setVisibleCreate] = useState(false);

  const { inviteUserToBookClub } = useApi(token);
  const { getBCInvites } = useApi(token);
  const { getUserDataByToken } = useApi(token);
  const { getBC_ID } = useApi(token);

  useEffect(() => {
    getUserData();
  }, []);

  function Invite() {
    console.log(BC_ID);
    console.log(text);
    console.log(email);
    inviteUserToBookClub(BC_ID, text)
      .then(function () {
        Platform.OS === "web"
          ? setVisibleInvite(true)
          : Alert.alert("Invito andato a buon fine");
        seeInvites();
      })
      .catch(function (error) {
        Platform.OS === "web"
          ? setVisibleInviteError(true)
          : Alert.alert("Errore", "L'utente non esiste o è stato già invitato");
        //console.error(error);
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
        console.log("errore seeInvites");
        console.error(error);
      });
  }

  return (
    <Screen>
      <AwesomeAlert
        show={visibleInvite}
        title="Successo"
        message="Utente invitato correttamente"
        closeOnTouchOutside={true}
        showCancelButton={false}
        showConfirmButton={false}
      />
      <AwesomeAlert
        show={visibleInviteError}
        title="Errore"
        message="L'utente non esiste o è stato già invitato"
        closeOnTouchOutside={true}
        showCancelButton={false}
        showConfirmButton={false}
      />
      <AwesomeAlert
        show={visibleCreate}
        title="Attenzione"
        message="Sei sicuro di voler invitare solo questi utenti?"
        closeOnTouchOutside={true}
        showCancelButton={false}
        showConfirmButton={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No"
        confirmText="Si"
        confirmButtonColor="#007aff"
        onCancelPressed={() => {
          setVisibleCreate(false);
        }}
        onConfirmPressed={() => {
          navigation.navigate(routes.BACHECASELECTION);
          setVisibleCreate(false);
        }}
      />
      <View style={styles.containerVisibleCreate}></View>
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

        <Pressable
          title="Controlla lo stato degli inviti"
          color={colors.blu}
          onPress={() => seeInvites()}
          style={styles.buttonLogin}
        >
          <Ionicons name="ios-refresh-circle" size={30} style={styles.icon} />
          <Text style={styles.settings}>Aggiorna la lista degli inviti</Text>
        </Pressable>

        <FlatList
          style={{ marginBottom: 55 }}
          data={users}
          keyExtractor={(user) => user.inviteId.toString()}
          renderItem={({ item }) => <UserListItem title={item.user} />}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.button}>
        <AppButton
          title="Fine"
          onPress={() => {
            setVisibleCreate(true);
          }}
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

  refresh: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: colors.red,
    alignItems: "center",
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
    color: colors.blu,
  },

  buttonRefresh: {
    alignItems: "center",
  },

  txtButton: {
    marginVertical: 5,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },

  icon: {
    marginHorizontal: 10,
    color: colors.blu,
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

  buttonLogin: {
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
  },

  settings: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: colors.blu,
  },
  containerVisibleCreate: {
    top: 100,
  },
});

export default InfoLibro;
