import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../util/";
import { WagerText } from "../";

const icons = [
  {
    type: "NBA",
    component: (
      <Ionicons
        style={{ textAlign: "center" }}
        name="basketball-outline"
        size={30}
        color="white"
      />
    ),
  },
  {
    type: "NFL",
    component: (
      <Ionicons
        style={{ textAlign: "center" }}
        name="american-football-outline"
        size={30}
        color="white"
      />
    ),
  },
];

export const Icon = ({ type, selected }) => {
  const icon = icons.find((icon) => icon.type === type).component;
  if (selected) {
    return (
      <View style={styles.container}>
        <View style={styles.selected}>{icon}</View>
        <WagerText type="regular"><Text style={{textAlign: "center"}}>{type}</Text></WagerText>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.unselected}>{icon}</View>
        <WagerText type="regular"><Text style={{textAlign: "center"}}>{type}</Text></WagerText>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  selected: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.orange.light,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    // TODO: add global heights and widths for icons etc
    width: 50,
    height: 50,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  unselected: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.grey.light,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    // TODO: add global heights and widths for icons etc
    width: 50,
    height: 50,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
