import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
} from "react-native";
import colors from "../../config/colors";
import Screen from "../Screen";
import BCIconItem from "./BCIconItem";

export default function BookClubCard({
  bcName,
  founderName,
  image,
  odlValue,
  pdlPersonale,
  titoloLibro,
  autore,
  onPress,
}) {
  const diff = odlValue - pdlPersonale;
  return (
    <TouchableOpacity onPress={onPress}>
      <Screen styleChildren={{ alignItems: "center" }}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Image source={image} style={styles.copertina} />
            <View style={styles.notesContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.bookClubTitle}>{bcName} </Text>
                <Text>{founderName}</Text>
              </View>

              <Text numberOfLines={2} style={styles.bookDescription}>
                {titoloLibro}
              </Text>
              <Text style={styles.author}>{autore}</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.subContainerODL}>
              {pdlPersonale === odlValue ? (
                <>
                  <BCIconItem
                    iconName="check-bold"
                    backgroundIconColor={colors.green}
                    containerSize={17}
                    styleContainer={{
                      padding: 0,
                    }}
                  />
                  <Text style={[styles.textODL, { color: "green" }]}>
                    obiettivo raggiunto
                  </Text>
                </>
              ) : (
                <>
                  <BCIconItem
                    iconName="close"
                    backgroundIconColor={colors.giallo}
                    containerSize={17}
                    styleContainer={{
                      padding: 0,
                    }}
                  />
                  <Text style={[styles.textODL, { color: colors.giallo }]}>
                    {diff} pagine rimanenti
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>
      </Screen>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    width: "90%",
    borderRadius: 5,
    marginVertical: Platform.OS === "android" ? 0 : 5,
  },
  subContainer: {
    flexDirection: "row",
    padding: 5,
    marginTop: 2,
    marginLeft: 2,
  },

  subContainerODL: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },

  copertina: {
    width: 80,
    height: 130,
    marginRight: 10,
    borderRadius: 5,
  },

  notesContainer: {
    flex: 1,
  },

  bookDescription: {
    //flex: 1,
    textAlign: "justify",
    color: colors.mediumgrey,
  },

  bookClubTitle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 2,
    textTransform: "uppercase",
  },

  iconContainer: {
    flexDirection: "column",
    paddingLeft: 10,
  },

  textODL: {
    fontSize: 14,
    paddingBottom: 10,
  },

  titleContainer: {
    paddingBottom: 20,
  },

  author: {
    color: colors.mediumgrey,
  },
});
