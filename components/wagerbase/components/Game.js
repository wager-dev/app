import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Spread } from "./Spread";
import { Feather } from "@expo/vector-icons";
import { TeamAndProfilePicture } from "./TeamAndProfilePicture";

import { Colors } from "../util";
import { WagerText } from "../";

export const Game = ({ teams, date, title }) => {
  const homeTeam = teams.find((team) => team.home);
  const awayTeam = teams.find((team) => !team.home);

  return (
    <View style={styles.gameContainer}>
      <WagerText type="bold">
        <Text style={styles.text}>{title}</Text>
      </WagerText>
      <View style={styles.gameTeamsContainer}>
        <View style={styles.game}>
          <View style={styles.gameLogo}>
            <TeamAndProfilePicture/>
          </View>
          <View style={styles.teamName}>
            <WagerText type="regular">
              <Text style={styles.teamText}>{homeTeam.name}</Text>
            </WagerText>
          </View>
          <Spread value={homeTeam.spread} />
        </View>
        <View style={styles.gameTime}>
          <WagerText type="regular">
            <View style={styles.centerText}>
            <Text style={styles.text}>{date.day}</Text>
            <Text style={styles.gameAtSign}>@</Text>
            <Text style={styles.text}>{date.time}</Text>
            </View>
          </WagerText>
        </View>
        <View style={styles.gameTeam}>
          <View style={styles.gameLogo}>
            <Feather name="circle" size={40} color="white" />
          </View>
          <View style={styles.teamName}>
            <WagerText type="regular">
              <Text style={styles.teamText}>{awayTeam.name}</Text>
            </WagerText>
          </View>
          <Spread value={awayTeam.spread} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    marginTop: 20,
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
    alignItems: "center",
  },
  gameTeam: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gameTime: {
    width: 80,
    paddingBottom: 18,
    alignItems: "center"
  },
  gameAtSign: {
    fontSize: 25,
    fontWeight: "700",
    color: Colors.orange.dark,
    textAlign: "center",
    paddingTop: 3,
    paddingBottom: 3,
  },
  centerText: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
  teamName: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  teamText: {
    fontSize: 17,
    textAlign: "center",
  },
  gameLogo: {
    alignItems: "center",
    paddingTop: 15,
  },
});
