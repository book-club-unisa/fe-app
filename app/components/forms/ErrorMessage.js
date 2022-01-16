import React from "react";
import { StyleSheet, Text } from "react-native";

// eslint-disable-next-line react/prop-types
export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
