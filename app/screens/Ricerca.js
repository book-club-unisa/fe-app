import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Pressable } from "react-native";
import { SearchBar } from "react-native-elements";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";
import BCListItem from "../components/singleItems/BCListItem";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "../components/AppTextInput";
import { FontAwesome5 } from "@expo/vector-icons";
import BCapi from "../api/BCapi";

const Ricerca = ({ navigation }) => {
  const [name, setName] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksByName(name);
  }, [name]);

  function getBooksByName(name) {
    //BCapi.get(`books/searchBook?query=${encodeURIComponent(name)}`)
    BCapi.get(`/books/searchBook/${name}`)
      .then(async function (response) {
        //setLoading(true);
        console.log(response.data);
        setBooks(response.data);
        //setLoading(false);
        //setError(false);
      })
      .catch(function (error) {
        //setError(true);
      });
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

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.yellow,
  },

  itemStyle: {
    padding: 10,
  },
  searchInput: {
    width: "90%",
    alignSelf: "center",
  },
});

export default Ricerca;
