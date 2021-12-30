import React from "react";
import { FlatList, StyleSheet } from "react-native";
import BookClubCard from "../components/singleItems/BookClubCard";
import Screen from "../components/Screen";
import colors from "../config/colors";

const Books = [
  {
    nomebc: "APPASSIONATI TOLKENIANI",
    nomeFondatore: "Luca Morelli",
    titoloLibro: "Il signore degli anelli - La compagnia dell'anello",
    autore: "J.R.Tolkien",
    descrizione:
      "Nella Seconda Era, Sauron, l'Oscuro Signore di Mordor, donò 19 " +
      "anelli alle razze della Terra di Mezzo: tre ai re degli elfi," +
      "sette ai re dei nani e nove ai re degli uomini; tutti loro, però," +
      "furono ingannati dall'Oscuro Signore, il quale forgiò l'Unico" +
      "Anello, in grado di controllare tutti gli altri. Nella battaglia" +
      "contro Sauron, Isildur, figlio del re degli uomini Elendil, tagliò" +
      "a Sauron il dito al quale era infilato l'Anello, ottenendo così la",
    image: require("../assets/lotr1.jpg"),
    odlValue: "50",
    pdlPersonale: "50",
  },

  {
    nomebc: "APPASSIONATI TOLKENIANI1",
    nomeFondatore: "Luca Morelli",
    titoloLibro: "Lo hobbit assonnato",
    autore: "J.R.Tolkien",
    descrizione:
      "E’ un romanzo scritto da J.R.R. Tolkien nel 1937, e per molti è ritenuto il prequel del Signore" +
      "degli Anelli per la presenza di aspetti comuni ad entrambi i libri e per il ripetersi di alcuni " +
      "personaggi che troviamo nella celeberrima trilogia. E’ un racconto fantasy che si colloca per lo " +
      "più nella categoria libri per ragazzi. Non mancano: elementi fantastici, maghi, incantesimi, " +
      " personaggi fatati, inventati, la sete di avventura e il raggiungimento della meta dopo aver " +
      "dato prova dei propri valori.",
    image: require("../assets/hobbit.jpg"),
    odlValue: "50",
    pdlPersonale: "30",
  },

  {
    nomebc: "POTTERHEAD",
    nomeFondatore: "Paolo Moretti",
    titoloLibro: "Harry Potter e i doni della morte",
    autore: "J.K.Rowling",
    descrizione:
      "Con l'avvicinarsi del suo diciassettesimo compleanno, Harry Potter rischia" +
      "di perdere la protezione offerta dalla casa degli zii; i Dursley vengono quindi " +
      "trasferiti per la loro sicurezza, mentre l'Ordine della Fenice si prepara a scortare " +
      "Harry verso la Tana, trasformando sei suoi affiliati in copie fisiche del ragazzo in " +
      "modo da confondere eventuali inseguitori. Durante il tragitto i Mangiamorte li " +
      " attaccano e Alastor Moody e Edvige vengono uccisi. Lord Voldemort tenta di assassinare " +
      " Harry, ma una reazione inattesa tra le loro due bacchette glielo impedisce.",
    image: require("../assets/hpdm.jpg"),
    odlValue: "30",
    pdlPersonale: "30",
  },

  {
    nomebc: "LETTURA LEGGERA",
    nomeFondatore: "Luca Morelli",
    titoloLibro: "Il Batman che ride",
    autore: "Scott Snyder",
    descrizione:
      "Gotham City. La polizia, guidata dal capitano James Gordon, " +
      " sta investigando in un capannone pieno di cadaveri, tutti caratterizzati da una " +
      " strana carnagione pallida ed un'anomala contrazione muscolare del viso, che forma " +
      " quasi un ghigno. Batman sospetta di una strana arma, e le vittime potevano essere una " +
      "sorta di cavie, e sarà solo l'inizio.",
    image: require("../assets/bwl.jpg"),
    odlValue: "60",
    pdlPersonale: "30",
  },
];
const random = 1;

function Bacheca({ navigation }) {
  return (
    <FlatList
      data={Books}
      keyExtractor={(book) => book.nomebc}
      renderItem={({ item }) => (
        <BookClubCard
          bcName={item.nomebc}
          founderName={item.nomeFondatore}
          image={item.image}
          odlValue={item.odlValue}
          pdlPersonale={item.pdlPersonale}
          titoloLibro={item.titoloLibro}
          autore={item.autore}
          onPress={() => navigation.navigate("infoBCFounder", item)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
  },
});
export default Bacheca;
