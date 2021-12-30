import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable, Alert } from "react-native";
import { TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function ReceivedInvite({
  image,
  title,
  ImageComponent,
  onPress,
  inviteState,
}) {
  const [state, setState] = useState(0);

  return (
    <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
      <View style={styles.container}>
        {image && <Image style={styles.profilePic} source={image} />}
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>

        <View>
          <View>
            {(state === 0 && (
              <View style={styles.icone}>
                <>
                  <Pressable onPress={(state) => setState(1)}>
                    <Ionicons
                      name="checkmark-outline"
                      size={25}
                      color={colors.blu}
                    />
                  </Pressable>

                  <Pressable onPress={(state) => setState(2)}>
                    <MaterialCommunityIcons
                      style={styles.singleIcon}
                      name="delete-outline"
                      size={25}
                      color={colors.blu}
                    />
                  </Pressable>
                </>
              </View>
            )) ||
              (state === 1 && (
                <>
                  <Ionicons
                    name="checkmark-circle-sharp"
                    size={25}
                    color={colors.green}
                  />
                </>
              )) ||
              (state === 2 && (
                <>
                  <Ionicons name="close-circle-sharp" size={25} color="red" />
                </>
              ))}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },

  details: {
    marginLeft: 10,
    flex: 1,
  },

  icone: {
    flex: 1,
    flexDirection: "row",
  },

  profilePic: {
    width: 30,
    height: 40,
    borderRadius: 3,
  },

  singleIcon: {
    marginLeft: 5,
  },

  title: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});

export default ReceivedInvite;
