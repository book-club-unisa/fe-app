import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import BCAppTextInput from "../components/singleItems/BCAppTextInput";
import { ErrorMessage } from "./forms";

export default function BCAppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <BCAppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
