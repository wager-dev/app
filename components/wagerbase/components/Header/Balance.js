import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

import { WagerText } from "../../index";
import { Colors } from "../../util";
import { WAGERCOIN } from "../../assets";

export const Balance = ({ tokenAmount }) => {
  const displayBalance = (input) => {
    return input > 1000 ? `${input / 1000}k` : input;
  };
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image style={styles.image} source={WAGERCOIN} />
      </View>
      <View style={styles.amount}>
        <WagerText type="bold">
          Balance: {displayBalance(tokenAmount)}
        </WagerText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.orange.light,
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
  image: {
    width: 23,
    height: 23,
  },
  amount: {
    backgroundColor: Colors.orange.dark,
    width: "90%",
    maxWidth: 150,
    height: 30,
    paddingLeft: 10,
  },
});