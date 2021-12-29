import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { SubmitButton, AppFormField } from "../components/forms";
import { Formik } from "formik";
import * as Yup from "yup";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Nome è un campo richiesto")
    .min(1)
    .max(16)
    .label("name"),
  surname: Yup.string()
    .required("Cognome è un campo richiesto")
    .min(1)
    .label("surname"),
  email: Yup.string()
    .required("Email è un campo richiesto")
    .email("Il formato deve essere quello di una email")
    .label("Email"),
  password: Yup.string()
    .required("Password è un campo richiesto")
    .min(4, "Password deve essere almeno di ${min} caratteri")
    .label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen styleChildren={styles.container}>
      <Image style={styles.logo} source={require("../assets/BCLogo.png")} />
      <Formik
        initialValues={{ name: "", surname: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome"
              iconName="account"
              name="name"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Cognome"
              iconName="account"
              name="surname"
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
