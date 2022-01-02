import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../../components/Screen";
import colors from "../../config/colors";

function DevItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      {image && <Image style={styles.profilePic} source={image} />}
      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {subTitle && (
          <Text numberOfLines={2} style={styles.subTitle}>
            {subTitle}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },

  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },

  details: {
    marginLeft: 10,
    flex: 1,
  },

  title: {
    fontWeight: "bold",
    paddingBottom: 5,
  },

  subTitle: {
    color: colors.mediumgrey,
  },
});

export default DevItem;
