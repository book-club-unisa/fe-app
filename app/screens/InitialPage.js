import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function InitialPage(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.miniContainer}>
          <Image style={styles.logo} source={require("../assets/BCLogo.png")} />
          <Text style={styles.titolo}>
            Accedi o registrati inserendo i tuoi dati!
          </Text>
        </View>

        <View style={styles.subContainer}>
          <View style={styles.buttons}>
            <AppButton
              styleButton={{ width: "90%" }}
              title="Accedi"
              onPress={() => navigation.navigate(routes.ACCEDI)}
            />
          </View>

          <View style={styles.buttonsi}>
            <AppButton
              styleButton={{ width: "90%" }}
              title="Registrati"
              onPress={() => navigation.navigate(routes.REGISTRATI)}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.azzurrino,
  },

  logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 40,
  },

  miniContainer: {
    top: 50,
  },

  subContainer: {
    top: 80,
  },

  titolo: {
    fontSize: 19,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 10,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default InitialPage;
