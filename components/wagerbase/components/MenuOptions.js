import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { Colors } from "../util";
import { WagerText } from "../";

export const MenuOptions = ({icon, title, toggle}) => {
  return (
    <View style={style.container}>
        <View style={style.icon}>
          <WagerText type="regular">
            <Text style={style.iconText}>{ icon }</Text>
          </WagerText>
        </View>
        <View style={style.title}>
          <WagerText type="regular">  
            <Text style={style.titleText}>{ title }</Text>
          </WagerText>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.white} />
        </View>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey.dark,
    width: "90%",
    height: 60,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    margin: 5,
    alignItems: "center"
  },
  iconText: {
    fontSize: 27,
  },
  icon: {
    paddingLeft: 20,
  },
  titleText: {
    fontSize: 19,
  },
  title: {
    paddingLeft: 10,
  }
})
