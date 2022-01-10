import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";
import BCListItem from "../components/singleItems/BCListItem";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Screen from "../components/Screen";

import routes from "../navigation/routes";
import BCapi from "../api/BCapi";

const Catalogo = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [index, setIndex] = useState();
  const [next, setNext] = useState(0);

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    console.log("next");
    changeNextPage();
  }, []);

  function getBooks() {
    BCapi.get("/books")
      .then(async function (response) {
        //setLoading(true);
        setBooks(response.data.items);
        console.log("pagina corrente");
        setIndex(response.data.meta.currentPage + 1);
        console.log(response.data.meta.currentPage);
        //setLoading(false);
        // setError(false);
      })
      .catch(function (error) {
        // setError(true);
      });
  }

  function changeNextPage() {
    BCapi.get(`/books?page=${index}&limit=10`)
      .then(async function (response) {
        console.log(" changeNextPage()");
        console.log(response.data.meta.currentPage);
        setIndex(response.data.meta.currentPage + 1);
        setBooks(response.data.items);
        setNext(1);
      })
      .catch(function (error) {
        console.log(2);
        console.log(error);
      });
  }

  return (
    <Screen>
      <View style={styles.container}>
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
      <AppButton
        title="Continua"
        onPress={() => changeNextPage()}
        styleButton={styles.button}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemStyle: {
    padding: 10,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },

  button: {
    backgroundColor: colors.blu,
    marginVertical: 5,
  },
});

/**
 * 
 * 
  useEffect(() => {
    console.log("previous");
    changePreviousPage();
  }, []);
  
  function changePreviousPage() {
    BCapi.get(`/books?page=${index}&limit=10`)
      .then(async function (response) {
        console.log(" changePreviousPage() index");
        console.log(response.data.meta.currentPage);
        setIndex(response.data.meta.currentPage - 1);
        setBooks(response.data.items);
        setNext(1);
      })
      .catch(function (error) {
        console.log(2);
        console.log(error);
      });
  }

 *       <AppButton
        title="Indietro"
        onPress={() => changePreviousPage()}
        styleButton={styles.button}
      />
 */

export default Catalogo;
