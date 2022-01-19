import React from "react";
import { StyleSheet, View } from "react-native";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const InviteLoader = (props) => {
  return (
    <View style={styles.container}>
      <ContentLoader
        speed={2}
        width={7575}
        height={60}
        viewBox="0 0 7575 60"
        backgroundColor="#9e9e9e"
        foregroundColor="#787878"
        {...props}
      >
        <Rect x="0" y="0" rx="3" ry="3" width="40" height="60" />
        <Rect x="50" y="15" rx="3" ry="3" width="200" height="10" />
        <Rect x="50" y="35" rx="3" ry="3" width="180" height="8" />
        <Circle cx="318" cy="30" r="10" />
      </ContentLoader>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default InviteLoader;
