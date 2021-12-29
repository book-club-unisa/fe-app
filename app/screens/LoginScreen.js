import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { SubmitButton, AppFormField } from "../components/forms";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email è un campo richiesto")
    .email("Il formato deve essere quello di una email")
    .label("Email"),
  password: Yup.string()
    .required("Password è un campo richiesto")
    .min(4, "Password deve essere almeno di ${min} caratteri")
    .label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <Screen styleChildren={styles.container}>
      <Image style={styles.logo} source={require("../assets/BCLogo.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
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
              onPress={() => navigation.navigate("Bacheca")}
            />
          </>
        )}
      </Formik>
      <AppButton
        title="Registrati qui"
        onPress={() => navigation.navigate("Register")}
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
});

export default LoginScreen;
