import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "./Header";

import { WagerText } from "./wagerbase";
import { Offers } from "./wagerbase";
import { Icon } from "./wagerbase";
import { Game } from "./wagerbase";

import { MIA } from "./NBALogos";

function Home({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#606060",
        height: "100%",
      }}
    >
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Offers requests="8" />
          <View style={styles.titleText}>
            <WagerText type="title">Create New Wager</WagerText>
          </View>
          <View style={styles.chooseIcons}>
            <Icon type="NBA" selected />
            <Icon type="NFL" />
          </View>
          <MIA />
          {games.map((game) => (
            <Game
              key={game.id}
              teams={game.teams}
              date={game.date}
              title={game.title}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const games = [
  {
    id: "001",
    title: "NBA: Philadelphia 76ers at Boston Celtics",
    teams: [
      {
        id: "PHI",
        name: "76ers",
        spread: "-5.5",
        home: false,
      },
      {
        id: "BOS",
        name: "Celtics",
        spread: "+5.5",
        home: true,
      },
    ],
    date: {
      day: "3/16",
      time: "8pm",
    },
  },
  {
    id: "002",
    title: "NBA: Boston Celtics at LA Lakers",
    teams: [
      {
        id: "BOS",
        name: "Celtics",
        spread: "+1.0",
        home: true,
      },
      {
        id: "LA",
        name: "Lakers",
        spread: "-2.5",
        home: false,
      },
    ],
    date: {
      day: "5/17",
      time: "2pm",
    },
  },
  {
    id: "003",
    title: "NBA: Boston Celtics at LA Lakers",
    teams: [
      {
        id: "BOS",
        name: "Celtics",
        spread: "+1.0",
        home: true,
      },
      {
        id: "LA",
        name: "Lakers",
        spread: "-2.5",
        home: false,
      },
    ],
    date: {
      day: "5/17",
      time: "2pm",
    },
  },
];

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
  },
  titleText: {
    marginTop: 10,
  },
  chooseIcons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
});

export default Home;
