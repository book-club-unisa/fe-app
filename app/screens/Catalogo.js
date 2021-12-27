import { Formik } from "formik";
import React, { useState } from "react";
import { FlatList, StyleSheet, View, Alert } from "react-native";
import BCListItem from "../components/singleItems/BCListItem";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppFormField } from "../components/forms";
import BCAppFormField from "../components/BCAppFormField";

const Books = [
  {
    id: 1,
    title: "Il signore degli anelli - La compagnia dell'anello",
    description:
      "Nella Seconda Era, Sauron, l'Oscuro Signore di Mordor, donò 19 " +
      "anelli alle razze della Terra di Mezzo: tre ai re degli elfi," +
      "sette ai re dei nani e nove ai re degli uomini; tutti loro, però," +
      "furono ingannati dall'Oscuro Signore, il quale forgiò l'Unico" +
      "Anello, in grado di controllare tutti gli altri. Nella battaglia" +
      "contro Sauron, Isildur, figlio del re degli uomini Elendil, tagliò" +
      "a Sauron il dito al quale era infilato l'Anello, ottenendo così la",
    image: require("../assets/lotr1.jpg"),
  },

  {
    id: 2,
    title: "Lo hobbit annoiato",
    description:
      "E’ un romanzo scritto da J.R.R. Tolkien nel 1937, e per molti è ritenuto il prequel del Signore" +
      "degli Anelli per la presenza di aspetti comuni ad entrambi i libri e per il ripetersi di alcuni " +
      "personaggi che troviamo nella celeberrima trilogia. E’ un racconto fantasy che si colloca per lo " +
      "più nella categoria libri per ragazzi. Non mancano: elementi fantastici, maghi, incantesimi, " +
      " personaggi fatati, inventati, la sete di avventura e il raggiungimento della meta dopo aver " +
      "dato prova dei propri valori.",
    image: require("../assets/hobbit.jpg"),
  },

  {
    id: 3,
    title: "Harry Potter e i doni della morte",
    description:
      "Con l'avvicinarsi del suo diciassettesimo compleanno, Harry Potter rischia" +
      "di perdere la protezione offerta dalla casa degli zii; i Dursley vengono quindi " +
      "trasferiti per la loro sicurezza, mentre l'Ordine della Fenice si prepara a scortare " +
      "Harry verso la Tana, trasformando sei suoi affiliati in copie fisiche del ragazzo in " +
      "modo da confondere eventuali inseguitori. Durante il tragitto i Mangiamorte li " +
      " attaccano e Alastor Moody e Edvige vengono uccisi. Lord Voldemort tenta di assassinare " +
      " Harry, ma una reazione inattesa tra le loro due bacchette glielo impedisce.",
    image: require("../assets/hpdm.jpg"),
  },

  {
    id: 4,
    title: "Il Batman che ride",
    description:
      "Gotham City. La polizia, guidata dal capitano James Gordon, " +
      " sta investigando in un capannone pieno di cadaveri, tutti caratterizzati da una " +
      " strana carnagione pallida ed un'anomala contrazione muscolare del viso, che forma " +
      " quasi un ghigno. Batman sospetta di una strana arma, e le vittime potevano essere una " +
      "sorta di cavie, e sarà solo l'inizio.",
    image: require("../assets/bwl.jpg"),
  },
];

const validationSchema = Yup.object().shape({
  search: Yup.string().min(1).label("Cerca libro"),
});

export default function Catalogo(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <BCAppFormField
              autoCorrect={false}
              keyboardType="default"
              placeholder="Cerca qui"
              iconName="book-search-outline"
              name="search"
            />
          </>
        )}
      </Formik>
      <FlatList
        data={Books}
        keyExtractor={(book) => book.id.toString()}
        renderItem={({ item }) => (
          <BCListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() =>
              Alert.alert("title", "Messaggio", [
                { text: "Ok", onPress: () => console.log(item.title) },
              ])
            }
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
});
