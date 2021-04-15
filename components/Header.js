import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Balance } from "./wagerbase";

const ViewBoxesWithColorAndText = () => {
  const teams = ["PHI"];
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.headerText}>Wager</Text>
      </View>
      <View style={styles.balanceView}>
        <Balance tokenAmount={80000} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    paddingLeft: 10,
    paddingTop: 40,
    backgroundColor: "#241f1e",
  },
  headerText: {
    textAlign: "center",
    margin: "auto",
    color: "white",
    fontSize: 40,
  },
  balanceView: {
    flex: 0.7,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default ViewBoxesWithColorAndText;
