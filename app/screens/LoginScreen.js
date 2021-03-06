import React, { useContext, useState } from "react";
import { Image, StyleSheet, Alert, Platform } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import Screen from "../components/Screen";
import { SubmitButton, AppFormField } from "../components/forms";
import { Formik } from "formik";
import authApi from "../api/auth";
import * as Yup from "yup";
import routes from "../navigation/routes";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import PropTypes from "prop-types";

LoginScreen.propTypes = {
  navigation: PropTypes.any,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email è un campo richiesto")
    .email("Il formato deve essere quello di una email")
    .min(6, "La lunghezza deve essere maggiore di ${min}")
    .max(100, "La lunghezza deve essere minore di ${max}")
    .label("Email"),
  password: Yup.string()
    .required("Password è un campo richiesto")
    .min(8, "Password deve essere almeno di ${min} caratteri")
    .max(32, "La lunghezza deve essere minore di ${max}")
    .label("Password"),
});

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    await authApi
      .login(email, password)
      .then(async function (response) {
        console.log(response.data);
        authContext.setToken(response.data);
        authStorage.storeToken(response.data);
        navigation.navigate(routes.CLUBS);
      })

      .catch(function () {
        Platform.OS === "web"
          ? setVisible(true)
          : Alert.alert("Errore, controlla i dati inseriti");
        //console.log(error);
      });
  };

  return (
    <Screen styleChildren={styles.container}>
      <AwesomeAlert
        show={visible}
        title="Errore"
        message="Controlla i dati inseriti"
        closeOnTouchOutside={true}
        showCancelButton={false}
        showConfirmButton={false}
      />
      <Image style={styles.logo} source={require("../assets/BCLogo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              iconName="email"
              name="email"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              iconName="lock"
              name="password"
              secureTextEntry={true}
            />
            <SubmitButton
              title="Accedi"
              onPress={() => {
                navigation.navigate(routes.BACHECASELECTION), console.log(1);
              }}
              styleButton={styles.button}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },

  button: {
    marginVertical: 10,
  },
});

export default LoginScreen;
