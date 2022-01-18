import React, { useState, useContext, useEffect } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  Alert,
  Pressable,
} from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import UserState from "../components/singleItems/UserState";
import NumericInput from "react-native-numeric-input";
import ProgressBar from "../components/singleItems/ProgressBar";
import useApi from "../api/api";
import AuthContext from "../auth/context";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";

InfoBookClubUser.propTypes = {
  route: PropTypes.any,
};

function InfoBookClubUser({ route }) {
  const [odl, setOdl] = useState(0);
  const [pdl, setPdl] = useState(0);
  const [currentUserPDL, setCurrentUserPDL] = useState(0);
  const { token } = useContext(AuthContext);

  const { addPDL } = useApi(token);
  const { getUserDataByToken } = useApi(token);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const item = route.params;
  const listUsers = route.params.Members;
  const BC_ID = item.id;
  const readGoalid = item.lastReadGoal.readGoalId;
  const bookPages = item.Book.pagesCount;

  //const pageReached = item.Members.pageReached;
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

  function _addPDL() {
    addPDL(BC_ID, currentUserPDL)
      .then(function () {
        setPdl(currentUserPDL);
        console.log(currentUserPDL);
        console.log("ok update pdl");
      })
      .catch(function (err) {
        Alert.alert("Errore");
        console.error(err);
      });
  }

  return (
    <Screen>
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
          </View>
        </View>

        <View style={{ justifyContent: "center" }}>
          <Text style={styles.txt}> Partecipanti </Text>
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
              <ProgressBar value={odlPercentage()} larghezza={310} />
            </View>
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
    width: "100%",
  },

  incrementaODL: {
    marginTop: 15,
  },
});

export default InfoBookClubUser;
