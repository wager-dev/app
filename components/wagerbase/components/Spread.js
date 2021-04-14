import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../util";

export const Spread = ({ value }) => {
  return (
    <View style={styles.container} >
      <Text style={{color: Colors.white}}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 60,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Colors.white,
        fontSize: 1,
    }
});