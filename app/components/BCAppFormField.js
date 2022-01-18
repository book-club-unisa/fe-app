import React from "react";
import { useFormikContext } from "formik";

import BCAppTextInput from "../components/singleItems/BCAppTextInput";
import { ErrorMessage } from "./forms";
import PropTypes from "prop-types";

BCAppFormField.propTypes = {
  name: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

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
