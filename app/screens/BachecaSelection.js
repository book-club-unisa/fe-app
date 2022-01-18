/* eslint-disable indent */
import React, { useState, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../api/api";
import AuthContext from "../auth/context";
import BachecaVuota from "./BachecaVuota";
import PropTypes from "prop-types";
import Bacheca from "./Bacheca";

BachecaSelection.propTypes = {
  navigation: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

function BachecaSelection({ navigation }) {
  const { token } = useContext(AuthContext);
  const { getBookClubsByToken } = useApi(token);

  const [bookClubs, setBookClubs] = useState([]);

  useEffect(() => {
    getBookClubs();
  }, []);

  function getBookClubs() {
    // setLoading(true);
    getBookClubsByToken()
      .then(function (bookClubs) {
        //setLoading(true);
        console.log("ok getBookClubs");
        setBookClubs(bookClubs);
        //setLoading(false);
      })
      .catch(function (err) {
        console.log("error getBookClubs");
        console.error(err);
      });
  }

  function arrayValue() {
    if (bookClubs.length === 0) {
      return 0;
    } else {
      return 1;
    }
  }

  return (
    <Screen styleChildren={styles.container}>
      {(arrayValue() === 0 && (
        <>
          <BachecaVuota />
        </>
      )) || (
        <>
          <Bacheca navigation={navigation} bookClubs={bookClubs} />
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
export default BachecaSelection;
