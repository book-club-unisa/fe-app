import React from "react";

import AnimatedLottieView from "lottie-react-native";

function AppActivityIndicator({ visible = true, source }) {
  if (!visible) return null;

  return <AnimatedLottieView autoPlay loop source={source} />;
}

export default AppActivityIndicator;
