import React from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

// eslint-disable-next-line react/prop-types
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
