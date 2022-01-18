import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
import PropTypes from "prop-types";

export default function SubmitButton({ title, styleButton }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} onPress={handleSubmit} styleButton={styleButton} />
  );
}

SubmitButton.propTypes = {
  title: PropTypes.string,
  styleButton: PropTypes.object,
};
