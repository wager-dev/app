import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import Header from "./Header";
import { default as getTeamLogo } from "./NBALogos";
import { WagerText } from "./wagerbase";
import { Colors } from "./wagerbase";
import { FriendBubble } from "./wagerbase";
import { WAGERCOIN } from "./wagerbase/assets";
import { onlineFriends } from "../data/wagers";

function Results({ navigation }) {
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
          <View style={styles.titleText}>
            <WagerText type="bold">New Wager</WagerText>
            <WagerText type="regular">Thursday, Sep 9 @ 8:20 pm EST</WagerText>
          </View>
          <View style={styles.teamsContainer}>
            <WagerText type="regular">pick your team</WagerText>
            <View style={styles.centeredText}>
              <View style={styles.homeTeam}>
                <View>{getTeamLogo({ big: true })}</View>
                <WagerText type="regular">Celtics</WagerText>
              </View>
              <View style={styles.teamsText}>
                <WagerText type="regular" style={styles.atSymbol}>
                  @
                </WagerText>
              </View>
              <View style={styles.awayTeam}>
                <View>{getTeamLogo({ big: true })}</View>
                <WagerText type="regular">Celtics</WagerText>
              </View>
            </View>
          </View>
          <View style={styles.opponentsContainer}>
            <WagerText type="regular">Pick your opponent</WagerText>
            <View style={styles.opponentBubbles}>
              {onlineFriends.map((friend) => (
                <FriendBubble
                  key={friend.id}
                  name={friend.name}
                  profilePicture={friend.image}
                />
              ))}
            </View>
          </View>
          <View style={styles.amountContainer}>
            <View style={styles.amountText}>
              <WagerText type="regular">pick your amount</WagerText>
            </View>
            <View style={styles.amountImages}>
              <Image style={styles.image} source={WAGERCOIN} />
              <Image style={styles.image} source={WAGERCOIN} />
              <Image style={styles.image} source={WAGERCOIN} />
              <Image style={styles.image} source={WAGERCOIN} />
              <Image style={styles.image} source={WAGERCOIN} />
            </View>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.wagerButton}>
                <WagerText type="regular" style={styles.wagerText}>
                  Wager!
                </WagerText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  titleText: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  teamsContainer: {
    borderColor: Colors.white,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  teamsText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  homeTeam: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: 35,
  },
  awayTeam: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 35,
  },
  atSymbol: {
    color: Colors.orange.light,
    fontSize: 25,
  },
  opponentsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderColor: Colors.white,
    padding: 20,
  },
  opponentBubbles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  centeredText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    height: 40,
  },
  amountImages: {
    display: "flex",
    flexDirection: "row",
    padding: 30,
    justifyContent: "space-between",
  },
  amountContainer: {
    display: "flex",
    flexDirection: "column",
  },
  amountText: {
    alignItems: "center",
    paddingTop: 20,
  },
  wagerButton: {
    backgroundColor: Colors.orange.light,
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  wagerText: {
    fontSize: 30,
  },
});

export default Results;
