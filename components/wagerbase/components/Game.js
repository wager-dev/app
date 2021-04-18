import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Spread } from "./Spread"
import { Feather } from '@expo/vector-icons'; 

import { Colors } from "../util"

export const Game = ({ teams, date, title }) => {
  const homeTeam = teams.find((team) => team.home);
  const awayTeam = teams.find((team) => !team.home);

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.gameTeamsContainer}>
        <View style={styles.game}>
          <View style={styles.gameLogo}><Feather name="circle" size={40} color="white" /></View>
          <Text style={styles.teamName}> {homeTeam.name} </Text>
          <Spread value={homeTeam.spread} />
        </View>
        <View style={styles.gameTime}>
          <Text style={styles.text}>{date.day}</Text>
          <Text style={styles.gameAtSign}>@</Text>
          <Text style={styles.text}>{date.time}</Text>
        </View>
        <View style={styles.gameTeam}>
          <View style={styles.gameLogo}><Feather name="circle" size={40} color="white" /></View>
          <Text style={styles.teamName}> {awayTeam.name} </Text>
          <Spread value={awayTeam.spread} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    width: "90%",
    maxWidth: 330,
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.grey.dark,
  },
  gameTeamsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  gameTeam: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  gameTime: {
    width: 80,
    paddingBottom: 18
  },
  gameAtSign: {
    fontSize: 16,
    color: Colors.orange.dark,
    textAlign: "center",
    paddingTop: 3,
    paddingBottom: 3 
  },
  text: {
    color: "white",
    textAlign: "center"
  },
  teamName: {
    color: "white",
    paddingTop: 3,
    paddingBottom: 12,
    textAlign: "center"
  },
  gameLogo: {
    alignItems: "center",
    paddingTop: 15
  }
})
