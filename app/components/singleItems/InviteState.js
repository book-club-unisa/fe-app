import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  BackHandler,
} from "react-native";
import { TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import useApi from "../../api/api";
import AuthContext from "../../auth/context";

InviteState.propTypes = {
  title: PropTypes.string,
  bookClubID: PropTypes.number,
  onPress: PropTypes.func,
  image: PropTypes.object,
  state: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onPressDelete: PropTypes.func,
};

function InviteState({
  image,
  title,
  onPress,
  inviteState,
  onPressDelete,
  bookClubID,
}) {
  const [state, setState] = useState(inviteState);

  const { token } = useContext(AuthContext);
  const { deleteInviteToBookClub } = useApi(token);

  function handleDelete() {
    deleteInviteToBookClub(bookClubID, title)
      .then(function () {
        setState("REFUSED");
        console.log("refused");
      })
      .catch(function (error) {
        console.log("error deleting invite", title);
        console.error(error);
      });
  }

  return (
    <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
      <View style={styles.container}>
        {image && <Image style={styles.profilePic} source={image} />}
        <MaterialCommunityIcons
          name="account-circle"
          size={25}
          color={colors.mediumgrey}
        />
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>

        <View>
          <View>
            {(state === "PENDING" && (
              <View style={{ flexDirection: "row" }}>
                <>
                  <MaterialCommunityIcons
                    name="clock"
                    size={25}
                    color={colors.orange}
                    style={{ marginRight: 10 }}
                  />

                  <Pressable onPress={() => handleDelete()}>
                    <MaterialCommunityIcons
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
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },

  profilePic: {
    width: 30,
    height: 30,
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

export default InviteState;
