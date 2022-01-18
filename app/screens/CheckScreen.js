import React from "react";
import { StyleSheet } from "react-native";
import AppActivityIndicator from "../components/AppActivityIndicator";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import PropTypes from "prop-types";

CheckScreen.propTypes = {
  navigation: PropTypes.any,
};

function CheckScreen({ navigation }) {
  return (
    <Screen styleChildren={styles.container}>
      <AppActivityIndicator
        visible={true}
        source={require("../assets/animations/verifiedSign4.json")}
      />
      <AppButton
        title="Continua"
        onPress={() => navigation.navigate(routes.BACHECA)}
        styleButtonContainer={styles.button}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: "center",
    //alignItems: "center",
  },

  button: {
    top: "90%",
  },
});

export default CheckScreen;
