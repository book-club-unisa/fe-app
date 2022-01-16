import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
}

ErrorMessage.propTypes = {
  error: PropTypes.any,
  visible: PropTypes.bool,
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
