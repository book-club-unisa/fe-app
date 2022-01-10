import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

export default function SubmitButton({ title, styleButton }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} onPress={handleSubmit} styleButton={styleButton} />
  );
}

const styles = StyleSheet.create({});
