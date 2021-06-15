import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TeamAndProfilePicture } from "./TeamAndProfilePicture";

import { Colors } from "../util";
import { WagerText } from "..";

export const WagerCard = ({ wager }) => {
  return (
    <View style={styles.container}>
      <View style={styles.usersAndTeams}>
        <WagerText type="regular">
          <View style={styles.user}>
            <TeamAndProfilePicture
              url={wager.teams[0].user.profile}
              icon={wager.teams[0].icon}
            />

            <Text style={styles.text}>
              {wager.teams[0].name} {wager.teams[0].spread}
            </Text>
            <Text style={styles.name}>{wager.teams[0].user.name}</Text>
          </View>
        </WagerText>
        <WagerText type="regular">
          <View style={styles.dateTime}>
            <Text style={styles.centerText}>{wager.date}</Text>
            <Text style={styles.atSign}>@</Text>
            <Text style={styles.centerText}>{wager.time}</Text>
          </View>
        </WagerText>
        <WagerText type="regular">
          <View style={styles.user}>
            <TeamAndProfilePicture
              url={wager.teams[1].user.profile}
              icon={wager.teams[1].icon}
            />
            <Text style={styles.text}>
              {wager.teams[1].name} {wager.teams[1].spread}
            </Text>
            <Text style={styles.name}>{wager.teams[1].user.name}</Text>
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
        <WagerText>{/* <Text style={styles.status}>Live</Text> */}</WagerText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: Colors.orange.light,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  usersAndTeams: {
    backgroundColor: Colors.grey.light,
    width: "80%",
    height: 130,
    borderBottomLeftRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  user: {
    width: 90,
    paddingTop: 20,
    alignItems: "center",
  },
  dateTime: {
    width: 80,
    paddingBottom: 18,
    paddingTop: 20,
    alignItems: "center",
  },
  potentialAndStatus: {
    backgroundColor: Colors.orange.light,
    height: 130,
    width: "20%",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    color: Colors.white,
    fontSize: 18,
  },
  name: {
    color: Colors.white,
    fontSize: 12,
  },
  centerText: {
    color: Colors.white,
    fontSize: 15,
    padding: 5,
  },
  atSign: {
    color: Colors.orange.light,
    fontSize: 18,
  },
});
