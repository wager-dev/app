import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "./Header";
import { WagerCard } from "./wagerbase";

import { WAGERS } from "../data/wagers";

function Wagers({ navigation }) {
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
        <View style={styles.cardContainer}>
          {WAGERS.map((wager) => {
            return <WagerCard key={wager.id} wager={wager} />;
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContainer: {
    width: "90%",
  },
});

export default Wagers;
