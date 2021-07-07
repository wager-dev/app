import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Spread } from "./Spread";
import { default as getTeamLogo } from "../../NBALogos";

import { Colors } from "../util";
import { WagerText } from "../";
import { block } from "react-native-reanimated";

export const Game = ({ teams, date, title }) => {
  const homeTeam = teams.find((team) => team.home);
  const awayTeam = teams.find((team) => !team.home);

  return (
    <View style={styles.container}>
      <WagerText type="regular">{title}</WagerText>
      <View style={styles.content}>
      <View style={styles.awayTeam}>
          <View>{getTeamLogo({ big: true })}</View>
          <WagerText type="regular" style={styles.teamName}>{awayTeam.name}</WagerText>
          <Spread value={awayTeam.spread} />
        </View>
        <View style={styles.schedule}>
          <WagerText type="regular">{date.day}</WagerText>
          <WagerText type="regular" style={styles.atSign}>@</WagerText>
          <WagerText type="regular">{date.time}</WagerText>
        </View>
        <View style={styles.homeTeam}>
          <View>{getTeamLogo({ big: true })}</View>
          <WagerText type="regular" style={styles.teamName}>{homeTeam.name}</WagerText>
          <Spread value={homeTeam.spread} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: Colors.grey.dark,
    width: "90%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  homeTeam: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  awayTeam: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  schedule: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  atSign: {
    color: Colors.orange.light,
  },
});
