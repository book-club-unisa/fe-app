import axios from "axios";
import React, {
  useState,
  useEffect,
  ActivityIndicator,
  Loading,
  TouchableOpacity,
  Pressable,
} from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";
import BCListItem from "../components/singleItems/BCListItem";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import { Ionicons } from "@expo/vector-icons";

import routes from "../navigation/routes";
import BCapi from "../api/BCapi";

const Catalogo = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [index, setIndex] = useState(1);
  const [next, setNext] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    changeNextPage();
  }, []);

  function changeNextPage() {
    setLoading(true);
    //BCapi.get(`/books?query=${search}&pageSize=10&pageNum=${index}`)
    BCapi.get(`/books?page=${index}&limit=10`)
      .then(async function (response) {
        //console.log(" changeNextPage()");
        // console.log(response.data.meta.currentPage);
        setIndex(response.data.meta.currentPage + 1);
        setBooks((prevData) => [...prevData, ...response.data.items]).setNext(
          1
        );
        setLoading(false);
      })
      .catch(function (error) {
        // console.log(2);
        // console.log(error);
      });
  }

  return (
    <Screen>
      <View style={styles.container}>
        <AppButton
          title="Cerca un libro"
          onPress={() => navigation.navigate(routes.RICERCA)}
        />

        <FlatList
          data={books}
          keyExtractor={(book) => book.isbn.toString()}
          renderItem={({ item }) => (
            <BCListItem
              title={item.title}
              subTitle={item.description}
              image={item.coverUrl}
              onPress={() => {
                navigation.navigate(routes.CREAZIONEBC, item);
              }}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          onEndReached={() => changeNextPage()}
          onEndReachedThreshold={0.1}
        />
      </View>
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

  search: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.blu,
  },

  searchIcon: {
    marginHorizontal: 10,
    color: colors.blu,
  },

  buttonSearch: {
    position: "absolute",
    alignSelf: "flex-end",
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    margin: 2,
  },
});

export default Catalogo;
