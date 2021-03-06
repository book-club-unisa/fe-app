import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import FeedNavigator from "./FeedNavigator";
import ClubNavigator from "./ClubNavigator";
import UsNavigator from "./UsNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="Bacheca"
    tabBarOptions={{
      showLabel: false,
      style: {
        right: 20,
        elevation: 0,
        backgroundColor: colors.blu,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderWidth: 1,
        borderColor: colors.blu,
        ...styles.shadow,
      },
    }}
  >
    <Tab.Screen
      name="Catalogo"
      component={FeedNavigator}
      options={() => ({
        tabBarIcon: ({ size, focused }) => (
          <View style={styles.container}>
            <Ionicons
              name={focused ? "ios-library" : "ios-library-outline"}
              color={colors.white}
              size={size}
            />
            <Text
              style={{
                color: colors.white,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              CATALOGO
            </Text>
          </View>
        ),
      })}
    />

    <Tab.Screen
      name="Bacheca"
      component={ClubNavigator}
      options={() => ({
        tabBarIcon: ({ size, focused }) => (
          <View style={styles.container}>
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={colors.white}
              size={size}
            />
            <Text
              style={{
                color: colors.white,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              BACHECA
            </Text>
          </View>
        ),
        unmountOnBlur: true,
      })}
    />
    <Tab.Screen
      name="Profilo"
      component={UsNavigator}
      options={() => ({
        tabBarIcon: ({ size, focused }) => (
          <View style={styles.container}>
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={colors.white}
              size={size}
            />
            <Text
              style={{
                color: colors.white,
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              PROFILO
            </Text>
          </View>
        ),
      })}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  shadow: {
    shadowColor: colors.mediumgrey,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default AppNavigator;
