import * as React from "react";
import { View, ScrollView, StyleSheet, Pressable, Button, TouchableOpacity } from "react-native";
import Header from "./Header";

import { Pending } from "./wagerbase";
import { Potential } from "./wagerbase";
import { WagerFilters } from "./wagerbase";
import { WagerText } from "./wagerbase";
import { WagerCard } from "./wagerbase";

import { WAGERS } from "../data/wagers";
import { Colors } from '../components/wagerbase/util';

function Wagers({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: Colors.grey.background,
        height: "100%",
      }}
    >
      <Header />
      <View style={styles.titleText}>
        <WagerText type="title">In Play</WagerText>
      </View>
      <View style={styles.container}>
        <View style={styles.pendingPotential}>
          <Pending pendingTokenAmount={200000} />
          <Potential potentialTokenAmount={428000} />
        </View>
      </View>
      <View styles={styles.container}>
        <View style={styles.timeFilters}>
          <WagerFilters status="Live" selected />
          <WagerFilters status="Accepted" />
          <WagerFilters status="Pending" />
        </View>
        <View style={styles.cards}>
          {WAGERS.map((wager) => (
              <WagerCard key={wager.id} wager={wager} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  titleText: {
    marginTop: 10,
  },
  pendingPotential: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  titleText: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  timeFilters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  cards: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Wagers;
