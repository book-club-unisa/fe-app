import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../Screen";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const DevLoader = (props) => {
  return (
    <Screen>
      <View style={styles.container}>
        <ContentLoader
          speed={2}
          width={7575}
          height={160}
          viewBox="0 0 7575 160"
          backgroundColor="#9e9e9e"
          foregroundColor="#787878"
          {...props}
        >
          <Rect x="70" y="18" rx="3" ry="3" width="200" height="10" />
          <Rect x="70" y="40" rx="3" ry="3" width="180" height="8" />
          <Circle cx="30" cy="30" r="30" />
        </ContentLoader>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default DevLoader;
