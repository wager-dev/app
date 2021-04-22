import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { WagerText } from '../'

import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from "../util";

export const Pending = ({ pendingTokenAmount }) => {
  const displayPending = (input) => {
    return input > 1000 ? `${input / 1000}k` : input;
  };
  return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <FontAwesome5 name="handshake" size={15} color="white" />
        </View>
        <View style={styles.amount}>
          <WagerText type="bold">
            Pending: {displayPending(pendingTokenAmount)}
          </WagerText>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.grey.dark,
    width: 30,
    height: 30,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 100,
  },
  amount: {
    backgroundColor: Colors.grey.light,
    width: "90%",
    maxWidth: 155,
    height: 30,
    paddingLeft: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
});