import React, { useContext } from "react";
import { Alert, Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { SubmitButton, AppFormField } from "../components/forms";
import { Formik } from "formik";
import * as Yup from "yup";

import BCapi from "../api/BCapi";
import routes from "../navigation/routes";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Nome è un campo richiesto")
    .min(2, "La lunghezza deve essere maggiore di ${min}")
    .max(20, "La lunghezza deve essere minore di ${max}")
    .label("name"),
  lastName: Yup.string()
    .required("Cognome è un campo richiesto")
    .min(2, "La lunghezza deve essere maggiore di ${min}")
    .max(20, "La lunghezza deve essere minore di ${max}")
    .label("surname"),
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

function RegisterScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  function register(values) {
    BCapi.post("users", values)
      .then(async function (response) {
        navigation.navigate(routes.ACCEDI);
      })
      .catch(function (error) {
        Alert.alert("Errore, indirizzo email non disponibile");
      });
  }

  return (
    <Screen styleChildren={styles.container}>
      <Image style={styles.logo} source={require("../assets/BCLogo.png")} />
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={(values) => register(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome"
              iconName="account"
              name="firstName"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Cognome"
              iconName="account"
              name="lastName"
            />
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
            <SubmitButton title="Registrati" />
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
});

export default RegisterScreen;
