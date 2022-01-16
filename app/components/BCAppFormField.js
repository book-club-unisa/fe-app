import React from "react";
import { useFormikContext } from "formik";

import BCAppTextInput from "../components/singleItems/BCAppTextInput";
import { ErrorMessage } from "./forms";

// eslint-disable-next-line react/prop-types
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
