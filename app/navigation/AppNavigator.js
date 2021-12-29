import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";
import Bacheca from "../screens/Bacheha";
import Catalogo from "../screens/Catalogo";
import ProfilePage from "../screens/ProfilePage";
import FeedNavigator from "./FeedNavigator";
import NewBacheca from "./NewBacheca";

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
        backgroundColor: colors.azzurrochiaro,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderWidth: 1,
        borderColor: colors.azzurrochiaro,
        height: 70,
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
            <MaterialCommunityIcons
              name="bookshelf"
              color={focused ? colors.white : colors.black}
              size={size}
            />
            <Text
              style={{
                color: focused ? colors.white : colors.black,
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
      component={Bacheca}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.container}>
            <MaterialCommunityIcons
              name="home"
              color={focused ? colors.white : colors.black}
              size={size}
            />
            <Text
              style={{
                color: focused ? colors.white : colors.black,
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
      component={ProfilePage}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.container}>
            <FontAwesome
              name="user"
              color={focused ? colors.white : colors.black}
              size={size}
            />
            <Text
              style={{
                color: focused ? colors.white : colors.black,
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
