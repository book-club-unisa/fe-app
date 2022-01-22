/* eslint-disable indent */
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
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import UserState from "../components/singleItems/UserState";
import NumericInput from "react-native-numeric-input";
import ProgressBar from "../components/singleItems/ProgressBar";
import routes from "../navigation/routes";
import useApi from "../api/api";
import AuthContext from "../auth/context";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

InfoBookClubFounder.propTypes = {
  route: PropTypes.any,
  navigation: PropTypes.any,
};

function InfoBookClubFounder({ route, navigation }) {
  console.log(route.params);
  const [odl, setOdl] = useState(0);
  const [pdl, setPdl] = useState(0);
  const [currentUserPDL, setCurrentUserPDL] = useState(0);
  const { token } = useContext(AuthContext);
  const { updateLastReadGoal } = useApi(token);
  const { addPDL } = useApi(token);
  const [odlNumPages, setOdlNumPages] = useState();
  const { getUserDataByToken } = useApi(token);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [visibleODL, setVisibleODL] = useState(false);
  const [visiblePDL, setVisiblePDL] = useState(false);

  const item = route.params;
  const listUsers = route.params.Members;
  const BC_ID = item.id;
  const readGoalid = item.lastReadGoal.readGoalId;
  const bookPages = item.Book.pagesCount;

  const pagecountlastreadgoal = route.params.lastReadGoal.pagesCount;
  const pagecountsecondlastreadgoal =
    route.params.secondLastReadGoal.pagesCount;

  function getUserData() {
    console.log(email);
    getUserDataByToken()
      .then(function ({ email, firstName, lastName }) {
        console.log("ok getUserData");
        setEmail(email);
        setName(firstName);
        setSurname(lastName);
        console.log(name, surname);
        listUsers.forEach((element) => {
          if (element.user.email === email) {
            console.log(element);
            setCurrentUserPDL(element.pageReached);
            console.log("currentUserPDL:", currentUserPDL);
          }
        });
      })
      .catch(function (err) {
        console.log("error getUserData");
        console.error(err);
      });
  }

  console.log("pdl:", pdl);

  useEffect(() => {
    setOdl(pagecountlastreadgoal);
  }, []);

  useEffect(() => {
    setPdl(pdl);
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    odlPercentage();
  }, [odl]);

  useEffect(() => {
    pdlPercentage();
  }, [currentUserPDL]);

  function odlPercentage() {
    const odlPercentageValue = (odl * 100) / bookPages / 100;
    return odlPercentageValue;
  }

  function pdlPercentage() {
    const pdlPercentageValue = (currentUserPDL * 100) / bookPages / 100;
    return pdlPercentageValue;
  }

  function _updateReadGoal() {
    updateLastReadGoal(BC_ID, odlNumPages)
      .then(function () {
        setOdl(odlNumPages);
        console.log("ok update lastreadgoal");
      })
      .catch(function () {
        Platform.OS === "web"
          ? setVisibleODL(true)
          : Alert.alert(
              "Errore",
              `Non puoi inserire un valore minore del precedente (${odl}) o maggiore del numero di pagine del libro (${bookPages})`
            );

        console.log("error update lastreadgoal");
        //console.error(err);
      });
  }

  function _addPDL() {
    addPDL(BC_ID, currentUserPDL)
      .then(function () {
        setPdl(currentUserPDL);
        console.log(currentUserPDL);
        console.log("ok update pdl");
      })
      .catch(function () {
        Platform.OS === "web"
          ? setVisiblePDL(true)
          : Alert.alert(
              "Errore",
              "Non puoi inserire un valore pari o minore di zero"
            );
        //Alert.alert("Errore");
        //console.error(err);
      });
  }

  return (
    <Screen>
      <AwesomeAlert
        show={visibleODL}
        title="Errore"
        message={`Non puoi inserire un valore minore del precedente (${odl}) o maggiore del numero di pagine del libro (${bookPages})`}
        closeOnTouchOutside={true}
        showCancelButton={false}
        showConfirmButton={false}
      />
      <AwesomeAlert
        show={visiblePDL}
        title="Errore"
        message={"Non puoi inserire un valore pari o minore di zero"}
        closeOnTouchOutside={true}
        showCancelButton={false}
        showConfirmButton={false}
      />
      <View style={styles.container}>
        <View style={styles.bookContainer}>
          <Image
            source={{ uri: item.Book.coverUrl }}
            style={styles.copertina}
          />
          <View style={styles.description}>
            <Text style={styles.boldtitle} numberOfLines={1}>
              Nome book club
            </Text>
            <Text numberOfLines={1}>{item.name}</Text>
            <Text numberOfLines={1}></Text>

            <Text style={styles.boldtitle} numberOfLines={1}>
              Fondatore
            </Text>
            <Text numberOfLines={1}>{item.founderEmail}</Text>

            <Text numberOfLines={1}></Text>
            <Text style={styles.boldtitle} numberOfLines={1}>
              Numero pagine
            </Text>
            <Text numberOfLines={1}>{bookPages}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txt}> Partecipanti </Text>
          <Pressable
            onPress={() => navigation.navigate(routes.REVISIONEINVITI, item)}
          >
            <Ionicons
              name="people"
              size={20}
              color="black"
              style={{ paddingLeft: "55%" }}
            />
          </Pressable>
        </View>
        <FlatList
          style={{ marginBottom: 55 }}
          data={listUsers}
          keyExtractor={(listUser) => listUser.membershipId.toString()}
          renderItem={({ item }) => (
            <UserState
              title={item.user.email}
              readGoalId={readGoalid}
              personalprogress={item.pageReached}
              pagecountlastreadgoal={pagecountlastreadgoal}
              pagecountsecondlastreadgoal={pagecountsecondlastreadgoal}
              onPress={() =>
                Alert.alert("title", "Messaggio", [
                  { text: "Ok", onPress: () => console.log(item.title) },
                ])
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.barre}>
        <View style={styles.bar}>
          <View style={styles.allinea}>
            <View style={{ marginRight: 20 }}>
              <Text style={styles.txt}> Obiettivo Di Lettura: {odl} </Text>
              <ProgressBar value={odlPercentage()} larghezza={200} />
            </View>

            <View style={{ marginTop: 15 }}>
              <NumericInput
                onChange={(numPages) => {
                  setOdlNumPages(numPages);
                }}
                minValue={0}
                rounded={true}
                totalWidth={80}
                rightButtonBackgroundColor={colors.blu}
                leftButtonBackgroundColor={colors.azzurrochiaro}
                borderColor={colors.white}
              />
            </View>
            <Pressable
              style={styles.checkmark}
              onPress={() => _updateReadGoal()}
            >
              <AntDesign name="checkcircle" size={24} color={colors.blu} />
            </Pressable>
          </View>
        </View>

        <View style={styles.bar}>
          <View style={styles.allinea}>
            <View style={{ marginRight: 20 }}>
              <Text style={styles.txt}>
                Progresso di Lettura: {currentUserPDL}
              </Text>
              <ProgressBar value={pdlPercentage()} larghezza={200} />
            </View>

            <View style={styles.incrementaODL}>
              <NumericInput
                onChange={(currentUserPDL) => {
                  setCurrentUserPDL(currentUserPDL);
                }}
                minValue={0}
                rounded={true}
                totalWidth={80}
                rightButtonBackgroundColor={colors.blu}
                leftButtonBackgroundColor={colors.azzurrochiaro}
                borderColor={colors.white}
              />
            </View>
            <Pressable style={styles.checkmark} onPress={() => _addPDL()}>
              <AntDesign name="checkcircle" size={24} color={colors.blu} />
            </Pressable>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  allinea: {
    flexDirection: "row",
    alignItems: "center",
  },

  bar: {
    marginBottom: 15,
    alignSelf: "center",
  },

  barre: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: colors.white,
  },

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

  container: {
    marginVertical: 40,
    overflow: "hidden",
    margin: 40,
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

  checkmark: {
    marginTop: 12,
    marginLeft: 12,
  },

  txt: {
    marginVertical: 5,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },

  incrementaODL: {
    marginTop: 15,
  },
});

export default InfoBookClubFounder;
