import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../util";
import { WagerText } from "../";

export const WagerFilters = ({ status, selected }) => {
  if (selected) {
    return (
      <TouchableOpacity 
        activeOpacity={0.5}
        style={styles.selected}
      >
        <WagerText type="regular">
          <Text style={styles.text}>{status}</Text>
        </WagerText>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity 
        activeOpacity={0.5}
        style={styles.unselected}
      >
        <WagerText type="regular">
          <Text style={styles.text}>{status}</Text>
        </WagerText>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  unselected: {
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 105,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.white,
  },
  selected: {
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 105,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.orange.light
  },
  text: {
    fontSize: 20
  }
});
