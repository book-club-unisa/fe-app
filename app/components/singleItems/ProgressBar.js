import React from "react";
import { View } from "react-native";
import colors from "../../config/colors";
import * as Progress from "react-native-progress";
import PropTypes from "prop-types";

ProgressBar.propTypes = {
  value: PropTypes.number,
  larghezza: PropTypes.number,
};

export default function ProgressBar({ value, larghezza }) {
  return (
    <View>
      <Progress.Bar
        progress={value}
        width={larghezza}
        height={15}
        borderRadius={7}
        borderWidth={0}
        unfilledColor={colors.azzurrochiaro}
      />
    </View>
  );
}
