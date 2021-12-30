import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

function PaginaCreazioneBC({ route, navigation }) {
  const [value, setValue] = useState("");

  const item = route.params;

  return (
    <Screen>
      <View style={styles.container}>
        <AppTextInput
          iconName="book-open-page-variant"
          placeholder="Nome book club"
          style={styles.textInput}
          onChangeText={(value) => setValue({ value })}
        />
        <Text style={styles.title}> Libro scelto </Text>
        <Text style={styles.bookTitle}>{route.params.title}</Text>
        <Text style={styles.autore}>{route.params.autore}</Text>
        <View style={styles.BookContainer}>
          <Image source={route.params.image} style={styles.copertina} />
          <Text style={styles.description} numberOfLines={12}>
            {route.params.description}
          </Text>
        </View>
        <AppButton
          title="crea book club"
          onPress={() => (
            navigation.navigate(routes.UTENTIDAINVITARE, item),
            navigation.navigate(routes.UTENTIDAINVITARE, value)
          )}
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
    flex: 1,
  },

  title: {
    margin: 20,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  autore: {
    marginBottom: 30,
    alignSelf: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
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
  },

  description: {
    flex: 1,
    textAlign: "justify",
    marginRight: 5,
  },
});

export default PaginaCreazioneBC;
