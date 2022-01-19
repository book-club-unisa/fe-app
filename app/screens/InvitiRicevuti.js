import React, { useState, useContext, useEffect } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import ReceivedInvite from "../components/singleItems/ReceivedInvite";

import InviteLoader from "../components/singleItems/InviteLoader";
import useApi from "../api/api";
import AuthContext from "../auth/context";

function InvitiRicevuti() {
  const [invites, setInvites] = useState([]);
  const [loading, setLoading] = useState(true);

  const { token } = useContext(AuthContext);
  const { getReicevedInvites } = useApi(token);

  useEffect(() => {
    getInvites();
  }, []);

  function getInvites() {
    setLoading(true);
    getReicevedInvites()
      .then(function (_invites) {
        setLoading(true);
        setInvites(_invites);
        setLoading(false);
        console.log(_invites[0].invitoUtente);
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

        {(loading === true && (
          <>
            <FlatList
              data={invites}
              keyExtractor={(invite) => invite.invitoUtente.inviteId.toString()}
              renderItem={({ item }) => <InviteLoader />}
              ItemSeparatorComponent={ListItemSeparator}
            />
          </>
        )) || (
          <>
            <FlatList
              data={invites}
              keyExtractor={(invite) => invite.invitoUtente.inviteId.toString()}
              renderItem={({ item }) => (
                <ReceivedInvite
                  title={item.nomeBookclub}
                  inviteID={item.invitoUtente.inviteId}
                  inviteState={item.invitoUtente.State}
                  image={{ uri: item.coverLibro }}
                />
              )}
              ItemSeparatorComponent={ListItemSeparator}
            />
          </>
        )}
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
