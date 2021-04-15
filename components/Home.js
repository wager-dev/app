import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Header from "./Header";
import { Icon } from "./wagerbase";
import { Spread } from "./wagerbase";

function Home({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <View>
        <Header />
      </View>
      <View>
        <View style={{ margin: "0.5em" }}>
          <Text style={[styles.createWagerText]}>Create New Wager</Text>
        </View>
        <View style={styles.body}>
          <Icon type="NBA" />
          <Spread value={"+5.5"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flexDirection: "column",
    backgroundColor: "#606060",
    height: "100%",
  },
  createWagerText: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  body: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    margin: "2em",
    marginTop: 0,
    marginBottom: "1em",
    justifyContent: "space-between",
  },
});

export default Home;
