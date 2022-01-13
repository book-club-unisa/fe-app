import React, { useState, useContext, useEffect } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";
import BookClubCard from "../components/singleItems/BookClubCard";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import useApi from "../api/api";
import AuthContext from "../auth/context";

const random = 1;

function Bacheca({ navigation }) {
  const { token, setToken } = useContext(AuthContext);
  const { getBookClubsByToken } = useApi(token);
  const { getUserDataByToken } = useApi(token);

  const [bookClubs, setBookClubs] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    getUserData();
    getBookClubs();
  }, []);

  function getUserData() {
    getUserDataByToken()
      .then(function ({ email, firstName, lastName }) {
        console.log("ok getUserData");
        console.log(email, firstName, lastName);
        setEmail(email);
        setName(firstName);
        setSurname(lastName);
      })
      .catch(function (err) {
        console.log("error getUserData");
        console.error(err);
      });
  }

  function getBookClubs() {
    getBookClubsByToken()
      .then(function (bookClubs) {
        console.log("ok getBookClubs");
        setBookClubs(bookClubs);
      })
      .catch(function (err) {
        console.log("error getBookClubs");
        console.error(err);
      });
  }

  return (
    <Screen styleChildren={styles.container}>
      <FlatList
        data={bookClubs}
        keyExtractor={(bookClub) => bookClub.id}
        renderItem={({ item }) => (
          <BookClubCard
            bcName={item.name}
            founderName={item.founderEmail}
            image={{ uri: item.Book.coverUrl }}
            //odlValue={item.odlValue}
            //pdlPersonale={item.Members.pageReached}
            titoloLibro={item.Book.title}
            autore={item.Book.author}
            onPress={() => {
              if (email === item.founderEmail) {
                navigation.navigate(routes.INFOBOOKCLUBF, item);
              } else {
                navigation.navigate(routes.INFOBOOKCLUBU, item);
              }
            }}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
export default Bacheca;
