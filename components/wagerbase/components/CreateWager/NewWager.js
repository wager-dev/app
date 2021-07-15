import * as React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { default as getTeamLogo } from "../../../NBALogos";
import { WagerText } from "../../index";
import { Colors } from "../../util";
import { FriendBubble } from "../..";
import { WAGERCOIN } from "../../assets";
import { FRIENDS, AMOUNTS } from "../../../../data";

export const NewWager = ({ game, setShowModal }) => {
  const { title, teams } = game;
  const homeTeam = teams.find((team) => team.home);
  const awayTeam = teams.find((team) => !team.home);

  const defaultWager = {
    team: homeTeam,
    opponent: FRIENDS[0],
    amount: AMOUNTS[0].raw,
  };

  const [newWager, setNewWager] = React.useState(defaultWager);
  const navigation = useNavigation();

  const submitWager = () => {
    // API: call submit wager mutation
    setShowModal(false);
    navigation.navigate("Wagers");
  };

  const isSelectedTeam = (team) => {
    if (team === newWager.team) {
      return (
        <View
          style={{
            borderBottomColor: Colors.orange.dark,
            borderBottomWidth: 1,
            width: 50,
            height: 5,
          }}
        ></View>
      );
    }
    return <View style={{ width: 50, height: 5 }}></View>;
  };

  const isOpponentPicked = (friend) => {
    return friend === newWager.opponent;
  };

  const isSelectedAmount = (amount) => amount === newWager.amount;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <View style={styles.titleText}>
            <WagerText type="bold">New Wager</WagerText>
            <WagerText type="regular">{title}</WagerText>
          </View>
          <View style={styles.closeModalButton}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
              }}
            >
              <AntDesign name="closecircleo" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.teamsContainer}>
          <WagerText type="regular">pick your team</WagerText>
          <View style={styles.centeredText}>
            <TouchableOpacity
              onPress={() => setNewWager({ ...newWager, team: awayTeam })}
            >
              <View style={styles.awayTeam}>
                <View>{getTeamLogo({ big: true })}</View>
                <WagerText type="regular">{awayTeam.name}</WagerText>
                {isSelectedTeam(awayTeam)}
              </View>
            </TouchableOpacity>
            <View style={styles.teamsText}>
              <WagerText type="regular" style={styles.atSymbol}>
                @
              </WagerText>
            </View>
            <TouchableOpacity
              onPress={() => setNewWager({ ...newWager, team: homeTeam })}
            >
              <View style={styles.homeTeam}>
                <View>{getTeamLogo({ big: true })}</View>
                <WagerText type="regular">{homeTeam.name}</WagerText>
                {isSelectedTeam(homeTeam)}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.opponentsContainer}>
          <WagerText type="regular">pick your opponent</WagerText>
          <ScrollView
            style={styles.opponentBubbles}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {FRIENDS.map((friend) => (
              <TouchableOpacity
                onPress={() => setNewWager({ ...newWager, opponent: friend })}
              >
                <FriendBubble
                  key={friend.id}
                  name={friend.name}
                  profilePicture={friend.image}
                  picked={isOpponentPicked(friend)}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.amountContainer}>
          <View style={styles.amountText}>
            <WagerText type="regular">pick your amount</WagerText>
          </View>
          <View style={styles.amountImages}>
            {AMOUNTS.map((amount) => (
              <TouchableOpacity
                onPress={() => setNewWager({ ...newWager, amount: amount.raw })}
              >
                <View
                  style={{
                    ...styles.amountWithNumber,
                    ...(isSelectedAmount(amount.raw)
                      ? styles.amountIsChosen
                      : {}),
                  }}
                >
                  <Image style={styles.image} source={WAGERCOIN} />
                  <WagerText style={styles.amountWithText}>
                    {amount.title}
                  </WagerText>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={submitWager}>
            <View style={styles.wagerButton}>
              <WagerText type="regular" style={styles.wagerText}>
                Send Wager
              </WagerText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  modal: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.grey.dark,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  closeModalButton: {
    margin: 10,
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
    marginTop: 15,
    width: "100%",
  },
  centeredText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 35,
    height: 35,
  },
  amountImages: {
    display: "flex",
    flexDirection: "row",
    padding: 30,
    paddingTop: 10,
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
  amountWithNumber: {
    display: "flex",
    flexDirection: "column",
    padding: 5,
  },
  amountWithText: {
    textAlign: "center",
  },
  amountIsChosen: {
    borderBottomWidth: 1,
    borderColor: Colors.orange.dark,
  },
  wagerButton: {
    backgroundColor: Colors.orange.light,
    display: "flex",
    alignItems: "center",
    padding: 10,
    paddingBottom: 30,
  },
  wagerText: {
    fontSize: 30,
  },
});
