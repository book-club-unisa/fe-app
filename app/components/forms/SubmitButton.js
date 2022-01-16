import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

// eslint-disable-next-line react/prop-types
export default function SubmitButton({ title, styleButton }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} onPress={handleSubmit} styleButton={styleButton} />
  );
}
