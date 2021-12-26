import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function PaginaCreazioneBC(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppTextInput
          iconName="book-open-page-variant"
          placeholder="Nome book club"
          style={styles.textInput}
        />
        <Text style={styles.title}> Libro scelto </Text>
        <View style={styles.BookContainer}>
          <Image
            source={require("../assets/lotr1.jpg")}
            style={styles.copertina}
          />
          <Text style={styles.description} numberOfLines={12}>
            Nella Seconda Era, Sauron, l'Oscuro Signore di Mordor, donò 19
            anelli alle razze della Terra di Mezzo: tre ai re degli elfi, sette
            ai re dei nani e nove ai re degli uomini; tutti loro, però, furono
            ingannati dall'Oscuro Signore, il quale forgiò l'Unico Anello, in
            grado di controllare tutti gli altri. Nella battaglia contro Sauron,
            Isildur, figlio del re degli uomini Elendil, tagliò a Sauron il dito
            al quale era infilato l'Anello, ottenendo così la
          </Text>
        </View>
        <AppButton title="crea book club" />
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
    flex: 1,
  },

  title: {
    marginVertical: 20,
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
  },

  description: {
    flex: 1,
    textAlign: "justify",
    marginRight: 5,
  },
});

export default PaginaCreazioneBC;
