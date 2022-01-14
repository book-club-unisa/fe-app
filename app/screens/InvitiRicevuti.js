import React, { useState, useContext, useEffect } from "react";
import { FlatList, View, StyleSheet, Text, Image, Alert } from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import ReceivedInvite from "../components/singleItems/ReceivedInvite";
import useApi from "../api/api";
import AuthContext from "../auth/context";

function InvitiRicevuti(props) {
  const [invites, setInvites] = useState([]);

  const { token, setToken } = useContext(AuthContext);
  const { getReicevedInvites } = useApi(token);

  useEffect(() => {
    getInvites();
  }, []);

  function getInvites() {
    getReicevedInvites()
      .then(function (_invites) {
        setInvites(_invites);
        //console.log(_invites);
        console.log(_invites[0].invitoUtente);
        //console.log(invites);
        console.log(1);
      })
      .catch(function (error) {
        console.log(token);
        console.log("errore");
        console.error(error);
      });
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.txt}> Inviti ricevuti </Text>

        <FlatList
          data={invites}
          keyExtractor={(invite) => invite.invitoUtente.inviteId.toString()}
          renderItem={({ item }) => (
            <ReceivedInvite
              title={item.nomeBookclub}
              inviteID={item.invitoUtente.inviteId}
              inviteState={item.invitoUtente.State}
              //email={item.user}
              //refuseFunction={refuseFunction}
              image={{ uri: item.coverLibro }}
              //inviteState={item.inviteState}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  allinea: {
    flexDirection: "row",
    alignItems: "center",
  },

  boldtitle: {
    fontWeight: "bold",
    color: colors.blu,
    textTransform: "uppercase",
  },

  container: {
    marginVertical: 10,
    overflow: "hidden",
    margin: 30,
    flex: 1,
    justifyContent: "center",
  },

  title: {
    marginVertical: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  txt: {
    marginTop: 60,
    marginBottom: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },
});

export default InvitiRicevuti;
