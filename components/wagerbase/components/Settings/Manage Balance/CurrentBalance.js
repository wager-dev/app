import * as React from "react";
import { View, StyleSheet } from "react-native";

import { WagerText } from "../../..";

export const CurrentBalance = () => {
  return (
    <View style={styles.container}>
      <WagerText type="regular" style={styles.balanceText}> Current Balance: </WagerText>
      <WagerText type="regular" style={styles.balance}> 350,000 Wagercoin </WagerText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  balanceText: {
    fontSize: 30
  },
  balance: {
    fontSize: 28
  }
});