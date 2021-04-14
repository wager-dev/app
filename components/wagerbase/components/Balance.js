import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { Colors } from "../util";
import { WAGERCOIN } from "../assets";

export const Balance = ({ tokenAmount }) => {
  const displayBalance = (input) => {
    return input > 1000 ? `${input / 1000}K` : input;
  };
  return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Image style={styles.image} source={WAGERCOIN} />
        </View>
        <View style={styles.amount}>
          <Text style={styles.text}>
            Balance: {displayBalance(tokenAmount)}
          </Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
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
    width: 20,
    height: 20,
  },
  amount: {
    backgroundColor: Colors.orange.dark,
    width: "45%",
    maxWidth: 150,
    height: 30,
    paddingLeft: 10,
  },
  text: {
    fontWeight: "700",
    color: Colors.white,
    lineHeight: 30,
  },
});
