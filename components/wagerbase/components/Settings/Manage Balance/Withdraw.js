import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../../../util";
import { WagerText } from "../../MultiUse/WagerText";

export const Withdraw = () => {
  return (
    <View style={styles.container}>
      <WagerText type="regular" style={styles.text}> Withdraw </WagerText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.orange.light,
    width: "35%",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 20
  }
});
