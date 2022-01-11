import React, { useContext } from "react";
import { Image, StyleSheet, Alert } from "react-native";
import Screen from "../components/Screen";
import { SubmitButton, AppFormField } from "../components/forms";
import { Formik } from "formik";
import authApi from "../api/auth";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";
import BCapi from "../api/BCapi";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

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
  /*
  function LogIn(values) {
    BCapi.post("users/sign-in", values)
      .then(async function (response) {
        navigation.navigate(routes.CLUBS);
      })

      .catch(function (error) {
        Alert.alert("Errore, controlla i dati inseriti");

        console.log(error);
      });
  }
  */

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi
      .login(email, password)
      .then(async function (response) {
        console.log(response.data);
        authContext.setToken(response.data);
        authStorage.storeToken(response.data);
        navigation.navigate(routes.CLUBS);
      })

      .catch(function (error) {
        Alert.alert("Errore, controlla i dati inseriti");
        console.log(error);
      });
  };

  return (
    <Screen styleChildren={styles.container}>
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
              onPress={() => navigation.navigate(routes.BACHECA)}
              onPress={() => navigation.navigate(routes.BACHECA)}
              styleButton={styles.button}
            />
          </>
        )}
      </Formik>
      <AppButton
        title="Registrati qui"
        onPress={() => navigation.navigate(routes.REGISTRATI)}
        styleButton={styles.button}
      />
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
