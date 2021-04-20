import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "./Header";

import { Pending } from "./wagerbase"
import { Potential } from "./wagerbase"
import { WagerFilters } from "./wagerbase"
import { WagerText } from "./wagerbase";
import { WagerCards } from "./wagerbase";

function Me({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#606060",
        height: "100%",
      }}
    >
      <Header />
        <View style={styles.container}>
          <View style={styles.pendingPotential}>
            <Pending pendingTokenAmount={200000} />
            <Potential potentialTokenAmount={428000} />
          </View>
        </View>
        <View style={styles.titleText}>
          <WagerText type="title">Wagers</WagerText>
        </View>
        <View styles={styles.container}>
          <View style={styles.timeFilters}>
            <WagerFilters status="Live" selected />
            <WagerFilters status="Accepted" />
            <WagerFilters status="Pending" />
          </View>
          <View style={styles.cards}>
            <WagerCards/>
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
  chooseIcons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  pendingPotential: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width:"90%",
    alignItems: "flex-start",
    marginTop: 20
  },
  titleText: {
    paddingLeft: 20,
    paddingTop: 10
  },
  timeFilters: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  cards:{
    padding: 20,
  }
});

export default Me;