import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

import { Colors } from "../util";
import { WagerText } from "..";
import { color } from "react-native-reanimated";

export const WagerResults = ({ team, spread, outcome, amount }) => {
  return (
    <View style={style.container}>
      <View style={style.icon}>
      <Ionicons name="basketball-outline" size={40} color="white" />
      </View>
      <View style={style.teamSpread}>
        <WagerText type="regular">
          <Text style={style.text}>{team} {spread}</Text>
        </WagerText>
      </View>
      <View style={style.outcomeAmount}>
      <WagerText type="regular">
        <Text style={style.text}>{outcome} {amount}</Text>
      </WagerText>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    marginTop: 20,
    borderStyle: "solid",
    borderWidth: 1.5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderColor: Colors.orange.light,
    borderRadius: 10
  },
  icon: {
    padding: 8
  },
  text: {
    color: Colors.white,
    fontSize: 20
  },
  teamSpread: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
    paddingLeft: 7,
    width: "50%"
  },
  outcomeAmount: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 20,
    width: "50%",
    paddingLeft: 30
  }
})