import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import Bacheca from "../screens/Bacheca";
import Catalogo from "../screens/Catalogo";
import ProfilePage from "../screens/ProfilePage";
import FeedNavigator from "./FeedNavigator";
import NewBacheca from "./NewBacheca";
import ClubNavigator from "./ClubNavigator";
import UsNavigator from "./UsNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        //position: "relative",
        //bottom: 15,
        //left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: colors.blu,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderWidth: 1,
        borderColor: colors.blu,
        //height: 55,
        //marginTop: 20,
        ...styles.shadow,
      },
    }}
  >
    <Tab.Screen
      name="Catalogo"
      component={FeedNavigator}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => (
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
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => (
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
              }}
            >
              BACHECA
            </Text>
          </View>
        ),
      })}
    />
    <Tab.Screen
      name="Profilo"
      component={UsNavigator}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => (
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

/**
 * tabBarButton: () => (
          <NewBacheca onPress={() => navigation.navigate("Bacheca")} />
        ),
 */
