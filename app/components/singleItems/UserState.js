/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import * as Progress from "react-native-progress";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function UserState({
  image,
  title,
  subTitle,
  onPress,
  pagecountlastreadgoal,
  pagecountsecondlastreadgoal,
  personalprogress,
  readGoalId,
}) {
  useEffect(() => {
    calcolaPDL();
  }, []);

  function calcolaPDL() {
    if (readGoalId === -1) {
      return 0;
    }
    const numeratore = pagecountlastreadgoal - personalprogress;

    const numeratorePercentuale = numeratore * 100;
    const denominatore = pagecountlastreadgoal - pagecountsecondlastreadgoal;
    const valore = numeratorePercentuale / denominatore;
    const risultato = valore / 100;
    console.log(risultato);
    return risultato;
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
          {subTitle && (
            <Text numberOfLines={2} style={styles.subTitle}>
              {subTitle}
            </Text>
          )}
        </View>

        <View>
          {(calcolaPDL() > 0 && (
            <View>
              <>
                <Progress.Pie
                  progress={calcolaPDL()}
                  size={25}
                  color={colors.green}
                  borderWidth={0}
                  unfilledColor="#a5d6a7"
                />
              </>
            </View>
          )) || (
            <>
              <Ionicons name="checkmark-circle" size={25} color="green" />
            </>
          )}
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

export default UserState;
