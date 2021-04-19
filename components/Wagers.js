import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "./Header";

import { WagerText } from "./wagerbase";

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
      <ScrollView>
        <View style={styles.container}>
          
        </View>
      </ScrollView>
    </View>
  );
}

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

export default Wagers;