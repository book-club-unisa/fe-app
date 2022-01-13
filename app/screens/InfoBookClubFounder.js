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
import * as Progress from "react-native-progress";
import UserState from "../components/singleItems/UserState";
import NumericInput from "react-native-numeric-input";
import ProgressBar from "../components/singleItems/ProgressBar";
import { FontAwesome5 } from "@expo/vector-icons";
import routes from "../navigation/routes";
import useApi from "../api/api";
import AuthContext from "../auth/context";
import { AntDesign } from "@expo/vector-icons";

function InfoBookClubFounder({ route, navigation }) {
  const [odl, setOdl] = useState(0);
  const { token, setToken } = useContext(AuthContext);
  const { updateLastReadGoal } = useApi(token);
  const [numPages, setNumPages] = useState();

  const item = route.params;
  const listUsers = route.params.Members;
  const BC_ID = item.id;
  const readGoalid = item.lastReadGoal.readGoalId;
  const bookPages = item.Book.pagesCount;

  const pagecountlastreadgoal = route.params.lastReadGoal.pagesCount;
  const pagecountsecondlastreadgoal =
    route.params.secondLastReadGoal.pagesCount;

  //console.log(listUsers[0].membershipId);
  //console.log(pagecountlastreadgoal);
  //console.log(pagecountsecondlastreadgoal);

  useEffect(() => {
    odlPercentage();
  }, [odl]);

  function odlPercentage() {
    const odlPercentageValue = (odl * 100) / bookPages / 100;
    //console.log("percent", odlPercentageValue);
    return odlPercentageValue;
  }

  function _updateReadGoal() {
    updateLastReadGoal(BC_ID, numPages)
      .then(function (result) {
        setOdl(numPages);
        console.log("ok update lastreadgoal");
      })
      .catch(function (err) {
        console.log("error getUserData");
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

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.txt}> Partecipanti </Text>
          <Pressable
            onPress={() => navigation.navigate(routes.REVISIONEINVITI, item)}
          >
            <FontAwesome5
              name="user-plus"
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
              <Text style={styles.txt}> Obiettivo Di Lettura </Text>
              <ProgressBar value={odlPercentage()} larghezza={200} />
            </View>

            <View style={{ marginTop: 15 }}>
              <NumericInput
                onChange={(numPages) => {
                  setNumPages(numPages);
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
              <Text style={styles.txt}> Progresso Di Lettura </Text>
              <ProgressBar value={0.2} larghezza={200} />
            </View>

            <View style={styles.incrementaODL}>
              <NumericInput
                onChange={(value) => console.log(value)}
                minValue={0}
                rounded={true}
                totalWidth={80}
                rightButtonBackgroundColor={colors.blu}
                leftButtonBackgroundColor={colors.azzurrochiaro}
                borderColor={colors.white}
              />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );

  /*
  
  */
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
