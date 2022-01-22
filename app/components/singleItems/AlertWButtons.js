import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../../config/colors";
import PropTypes from "prop-types";

AlertWButtons.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonLeft: PropTypes.string,
  buttonRight: PropTypes.string,
  onPressButtonLeft: PropTypes.func,
  onPressButtonRight: PropTypes.func,
};

function AlertWButtons({ onPressButtonLeft, onPressButtonRight }) {
  return (
    <View style={styles.alert}>
      <Text style={styles.alertTitle}>Errore</Text>
      <Text style={styles.alertText}>Testo di errore</Text>
      <View style={styles.alertButtons}>
        <Pressable style={styles.alertButtonLeft} onPress={onPressButtonLeft}>
          <Text style={styles.buttonText}>Tasto sinistro</Text>
        </Pressable>
        <Pressable style={styles.alertButtonRight} onPress={onPressButtonRight}>
          <Text style={styles.buttonText}>Tasto destro</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alert: {
    position: "absolute",
    backgroundColor: colors.white,
    width: "70%",
    height: "20%",
    zIndex: 1,
    alignSelf: "center",
    justifyContent: "center",
    top: "35%",
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  alertTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    margin: 5,
  },

  alertText: {
    alignSelf: "center",
    fontSize: 14,
  },

  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },

  alertButtonLeft: {
    backgroundColor: colors.blu,
    height: 30,
    marginHorizontal: 10,
    margin: 7,
    bottom: 0,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  alertButtonRight: {
    backgroundColor: colors.blu,
    height: 30,
    margin: 7,
    marginHorizontal: 10,
    bottom: 0,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  alertButtons: {
    position: "absolute",
    bottom: 1,
    alignSelf: "center",
    flexDirection: "row",
  },
});
export default AlertWButtons;
