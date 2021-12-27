import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function BCListItem({ image, title, subTitle, ImageComponent, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
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
        <MaterialCommunityIcons
          name="chevron-right"
          size={25}
          color={colors.mediumgrey}
        />
      </View>
    </TouchableHighlight>
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
    width: 65,
    height: 90,
    //borderRadius: 35,
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
export default BCListItem;
