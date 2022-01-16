import React from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import PropTypes from "prop-types";

Screen.propTypes = {
  children: PropTypes.any,
  styleChildren: PropTypes.any,
};

export default function Screen({ children, styleChildren }) {
  return (
    <SafeAreaView style={[styles.container, styleChildren]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
