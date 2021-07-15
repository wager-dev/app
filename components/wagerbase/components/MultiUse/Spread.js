import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../../util";
import { WagerText } from "../..";

export const Spread = ({ value }) => {
  return (
    <View style={styles.container}>
      <WagerText type="regular">
        <Text style={{ lineHeight: 25 }}>{value} points</Text>
      </WagerText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.white,
  },
});
