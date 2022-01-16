import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { useEffect, useState } from "react";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [token, setToken] = useState();

  const restoreToken = async () => {
    const userToken = await authStorage.getToken();
    if (!userToken) return;
    setToken(userToken);
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <NavigationContainer theme={NavigationTheme}>
        {token ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

//Per ProfilePage è necessario dare dei valori da passare al component

/**
 * <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
 */
/**
 * <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
 */
