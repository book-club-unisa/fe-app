import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";
import BCListItem from "../components/singleItems/BCListItem";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppTextInput from "../components/AppTextInput";
import BCapi from "../api/BCapi";
import PropTypes from "prop-types";

const Ricerca = ({ navigation }) => {
  const [name, setName] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksByName(name);
  }, [name]);

  function getBooksByName(name) {
    BCapi.get(`/books/searchBook/${name}`)
      .then(async function (response) {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(function () {});
  }

  return (
    <Screen>
      <View style={styles.container}>
        <AppTextInput
          onChangeText={(name) => setName(name)}
          iconName="book-search"
          placeholder="Cerca un libro"
          style={styles.searchInput}
        />
        <FlatList
          data={books}
          keyExtractor={(book) => book.isbn.toString()}
          renderItem={({ item }) => (
            <BCListItem
              title={item.title}
              subTitle={item.description}
              image={item.coverUrl}
              onPress={() => navigation.navigate(routes.CREAZIONEBC, item)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </Screen>
  );
};

Ricerca.propTypes = {
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {},

  itemStyle: {
    padding: 10,
  },
  searchInput: {
    width: "90%",
    alignSelf: "center",
  },
});

export default Ricerca;
