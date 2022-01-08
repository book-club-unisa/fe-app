import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, Alert, Text, Button } from "react-native";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";
import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import BCapi from "../api/BCapi";
import AddUserItem from "../components/singleItems/AddUserItem";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";

const InvitaUtenti = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    BCapi.get("/users")
      .then(async function (response) {
        setLoading(true);
        setUsers(response.data);
        setLoading(false);
        setError(false);
      })
      .catch(function (error) {
        setError(true);
      });
  }

  return (
    <Screen>
      <View style={styles.container}>
        {error && (
          <>
            <Text style={styles.errorText}>
              Impossibile visualizzare la lista
            </Text>
            <AppButton title="Ricarica" onPress={getUsers} />
          </>
        )}
        {!error && (
          <>
            <View style={styles.searchContainer}>
              <AppTextInput
                iconName="book-open-page-variant"
                placeholder="Cerca utenti"
                style={styles.textInput}
              />
            </View>
            <AppActivityIndicator
              visible={loading}
              source={require("../assets/animations/circle.json")}
            />

            <FlatList
              //style={{ marginBottom: 55 }}
              data={users}
              keyExtractor={(user) => user.email}
              renderItem={({ item }) => (
                <AddUserItem
                  title={item.email}
                  image={item.image}
                  onPress={() =>
                    Alert.alert("title", "Messaggio", [
                      { text: "Ok", onPress: () => console.log("1") },
                    ])
                  }
                />
              )}
              ItemSeparatorComponent={ListItemSeparator}
            />
          </>
        )}
      </View>
    </Screen>
  );
};

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

  errorText: {
    fontSize: 18,
    alignSelf: "center",
  },

  title: {
    marginVertical: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  txt: {
    marginVertical: 5,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.black,
  },

  title: {
    flexDirection: "row",
    flex: 1,
  },

  textInput: {
    flex: 1,
  },

  searchContainer: {
    marginVertical: 20,
  },
});

export default InvitaUtenti;
