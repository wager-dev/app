import * as React from "react";
import { View, ScrollView, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import Header from "./Header";

import { WagerText } from "./wagerbase";
import { Offers } from "./wagerbase";
import { Icon } from "./wagerbase";
import { Game } from "./wagerbase";
import { TeamAndProfilePicture } from "./wagerbase";
import { Colors } from '../components/wagerbase/util';

function Home({ navigation }) {
  const onPressHandler = () => {
    // navigation.navigate('New Wager')
  }

  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: Colors.grey.background,
        height: "100%",
      }}
      >
      <Header />
      <ScrollView>
        <View style={styles.container}>
          {games.map((game) => (
            <TouchableOpacity 
              activeOpacity={0.5}
              onPress={onPressHandler}
              style={styles.touchable}
            >
              <Game
                key={game.id}
                teams={game.teams}
                date={game.date}
                title={game.title}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const games = [
  {
    id: "001",
    title: "NBA: Philadelphia @ Boston",
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
      day: " Sun 3/16",
      time: "8pm",
    },
  },
  {
    id: "002",
    title: "NBA: Boston @ LA",
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
      day: "Thurs 5/17",
      time: "2pm",
    },
  },
  {
    id: "003",
    title: "NBA: Boston @ LA",
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
      day: " Fri 5/17",
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
  touchable: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  }
});

export default Home;
