import React, { useState, useContext } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AuthContext from "../../auth/context";
import useApi from "../../api/api";

// eslint-disable-next-line react/prop-types
function ReceivedInvite({ image, title, onPress, inviteState, inviteID }) {
  const [state, setState] = useState(inviteState);

  const { token } = useContext(AuthContext);
  const { acceptInvite } = useApi(token);
  const { refuseInvite } = useApi(token);

  function acceptFunction() {
    console.log(inviteID);
    acceptInvite(inviteID)
      .then(function () {
        setState("ACCEPTED");
        console.log("accepted");
      })
      .catch(function (error) {
        console.log("error accepting invite", inviteID);
        console.error(error);
      });
  }

  function refuseFunction() {
    console.log(inviteID);
    refuseInvite(inviteID)
      .then(function () {
        setState("REFUSED");
        console.log("refused");
      })
      .catch(function (error) {
        console.log("error refusing invite", inviteID);
        console.error(error);
      });
  }

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
            {(state === "PENDING" && (
              <View style={styles.icone}>
                <>
                  <Pressable onPress={() => acceptFunction()}>
                    <Ionicons
                      name="checkmark-outline"
                      size={25}
                      color={colors.blu}
                    />
                  </Pressable>

                  <Pressable onPress={() => refuseFunction()}>
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
              (state === "ACCEPTED" && (
                <>
                  <Ionicons
                    name="checkmark-circle-sharp"
                    size={25}
                    color={colors.green}
                  />
                </>
              )) ||
              (state === "REFUSED" && (
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
    width: 40,
    height: 55,
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
