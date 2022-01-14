import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, Image, Alert, Pressable } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import BCapi from "../api/BCapi";
import AuthContext from "../auth/context";
import useApi from "../api/api";

function PaginaCreazioneBC({ route, navigation }) {
  const [value, setValue] = useState("");
  const [validate, setValidate] = useState(false);
  const { token, setToken } = useContext(AuthContext);
  const { createBookClub } = useApi(token);

  const [isbn, setIsbn] = useState(route.params.isbn);

  const Controllo = (value) => {
    if (value.length < 2 || value.length > 20) {
      setValidate(false);
    } else {
      setValue({ value });
      setValidate(true);
    }
  };

  const CButton = () => {
    if (validate === true) {
      createBC(isbn, value);
    } else {
      Alert.alert("Errore", "Il nome del bookclub non è valido");
    }
  };

  const createBC = (isbn) => {
    const name = value.value;
    createBookClub(isbn, name)
      .then((data) => {
        navigation.navigate(routes.INFOLIBRO, item),
          navigation.navigate(routes.INFOLIBRO, value);
      })
      .catch(function (err) {
        Alert.alert("Errore", "Hai già creato un bookclub con questo nome");
        console.error(err);
      });
  };

  const item = route.params;

  return (
    <Screen>
      <View style={styles.container}>
        <AppTextInput
          iconName="book-open-page-variant"
          placeholder="Nome book club"
          style={styles.textInput}
          onChangeText={Controllo}
        />
        <Text style={styles.title}> Libro scelto: "{route.params.title}" </Text>
        <Text style={styles.autore}> Autore: {route.params.author}</Text>
        <View style={styles.BookContainer}>
          <Image
            source={{ uri: route.params.coverUrl }}
            style={styles.copertina}
          />
          <View>
            <Text style={styles.numPages}>
              Numero di pagine: {route.params.pagesCount}
            </Text>
            <Text style={styles.description} numberOfLines={12}>
              {route.params.description}
            </Text>
          </View>
        </View>
        <AppButton
          onPress={(isbn, value) => {
            CButton(isbn, value);
          }}
          title="crea book club"
          styleButton={styles.button}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    overflow: "hidden",
    margin: 10,
    flex: 1,
  },
  textInput: {
    width: "90%",
    alignSelf: "center",
  },

  button: {
    marginTop: 20,
  },

  title: {
    marginVertical: 10,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },

  autore: {
    marginBottom: 30,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  numPages: {
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5,
  },

  bookTitle: {
    marginVertical: 10,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  BookContainer: {
    flexDirection: "row",
    width: "100%",
  },

  copertina: {
    width: 130,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 8,
  },

  description: {
    textAlign: "justify",
    marginRight: 5,
  },
});

export default PaginaCreazioneBC;
