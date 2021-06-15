import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { WagerText } from '../'

import { FontAwesome5 } from '@expo/vector-icons';
import { Colors, numberToThousand } from "../util";

export const Potential = ({ potentialTokenAmount }) => {
  return (
      <View style={styles.container}>
        <View style={styles.icon}>
          {/* <FontAwesome5 name="handshake" size={15} color="white" /> */}
          <Text style={{fontSize: 18}} >🤑</Text>
        </View>
        <View style={styles.amount}>
          <WagerText type="bold">
            Potential: {numberToThousand(potentialTokenAmount)}
          </WagerText>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "flex-end",
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
    marginLeft: 10
  },
  amount: {
    backgroundColor: Colors.grey.light,
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
});