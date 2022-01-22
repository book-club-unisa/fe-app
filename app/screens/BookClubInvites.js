import React, { useState, useContext, useEffect } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";

import colors from "../config/colors";
import InviteState from "../components/singleItems/InviteState";
import AuthContext from "../auth/context";
import useApi from "../api/api";
import PropTypes from "prop-types";

BookClubInvites.propTypes = {
  route: PropTypes.any,
};

function BookClubInvites({ route }) {
  const [users, setUsers] = useState([]);
  const { token } = useContext(AuthContext);
  const { getInvitesByFounder } = useApi(token);

  const BC_ID = route.params.id;

  useEffect(() => {
    seeFounderInvites();
  }, []);

  function seeFounderInvites() {
    getInvitesByFounder(BC_ID)
      .then(function (usersList) {
        setUsers(usersList);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.txt}>Stato dei tuoi inviti </Text>

        <FlatList
          style={{ marginBottom: 55 }}
          data={users}
          keyExtractor={(user) => user.inviteId.toString()}
          renderItem={({ item }) => (
            <InviteState
              title={item.user}
              inviteState={item.State}
              bookClubID={item.bookclub}
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

  bookContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },

  container: {
    marginVertical: 10,
    overflow: "hidden",
    margin: 30,
    flex: 1,
    justifyContent: "center",
  },

  copertina: {
    width: 52,
    height: 80,
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
    marginTop: 40,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },
});

export default BookClubInvites;
