import React, { useState, useEffect } from "react";
import { SafeAreaView, Alert, StyleSheet, View, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import ListItemSeparator from "../components/singleItems/ListItemSeparator";
import BCListItem from "../components/singleItems/BCListItem";

import colors from "../config/colors";

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
const Catalogo = () => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(Books);
  const [masterDataSource, setMasterDataSource] = useState(Books);
  const [Refreshig, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setFilteredDataSource([...Books]);
    setSearch("");
    setRefreshing(false);
  };
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          inputStyle={{ backgroundColor: colors.lightgrey }}
          containerStyle={{
            backgroundColor: "white",
            borderWidth: 1,
            //borderRadius: 5,
            borderTopColor: colors.white,
            borderBottomColor: colors.white,
            borderColor: colors.white,
          }}
          inputContainerStyle={{
            backgroundColor: colors.lightgrey,
          }}
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
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
          refreshing={Refreshig}
          onRefresh={onRefresh}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
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
});

export default Catalogo;
