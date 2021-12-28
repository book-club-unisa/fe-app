import React from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import { FontAwesome } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

function UserState({ image, title, subTitle, ImageComponent, onPress }) {
    return (
        <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
      <View style={styles.container}>
        {image && <Image style={styles.profilePic} source={image} />}
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
        <Progress.Pie progress={0.4} size={25} color={colors.green} borderWidth={0} unfilledColor='#a5d6a7'/>
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
})

export default UserState;