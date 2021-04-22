import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Colors } from "../util";
import { WagerText } from "../";

export const WagerCards = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.usersAndTeams}>
        <WagerText type="regular">
          <View style={styles.user}>
            <Feather name="circle" size={40} color="white" />
            <Text style={styles.text}>Celtics +5.5</Text>
            <Text style={styles.text}>Me</Text>
          </View>
        </WagerText>
        <WagerText type="regular">
          <View style={styles.dateTime}>
            <Text style={styles.centerText}> 3/19 </Text>
            <Text style={styles.atSign}>@</Text>
            <Text style={styles.centerText}>7:30pm</Text>
          </View>
        </WagerText>
        <WagerText type="regular">
          <View style={styles.opponent}>
            <Feather name="circle" size={40} color="white" />
            <Text style={styles.text}>Sixers -5.5</Text>
            <Text style={styles.text}>Sarah</Text>
          </View>
        </WagerText>
      </View>
      <View style={styles.potentialAndStatus}>
        <WagerText type="bold">
          <Text>40K</Text>
        </WagerText>
        <WagerText type="regular">
          <Text>To win 78K</Text>
        </WagerText>
        <WagerText>
          <Text style={styles.status}>Live</Text>
        </WagerText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row"
  },
  usersAndTeams: {
    backgroundColor: Colors.grey.light,
    width: "80%",
    height: 120,
    borderBottomLeftRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  user: {
    width: 90,
    paddingBottom: 18,
    paddingTop: 20,
    alignItems: "center"
  },
  dateTime: {
      width: 80,
      paddingBottom: 18,
      alignItems: "center"
  },
  opponent: {
    width: 80,
    paddingBottom: 18,
    paddingTop: 20,
    alignItems: "center"
  },
  potentialAndStatus: {
    backgroundColor: Colors.orange.light,
    height: 120,
    width: "20%",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  text: {
    color: Colors.white,
    fontSize: 17
  },
  centerText: {
    color: Colors.white
  },
  atSign: {
    color: Colors.orange.light
  },
})