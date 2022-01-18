import React from "react";

import AnimatedLottieView from "lottie-react-native";
import PropTypes from "prop-types";

AppActivityIndicator.propTypes = {
  visible: PropTypes.bool,
  source: PropTypes.any,
};

function AppActivityIndicator({ visible = true, source }) {
  if (!visible) return null;

  return <AnimatedLottieView autoPlay loop source={source} />;
}

export default AppActivityIndicator;
