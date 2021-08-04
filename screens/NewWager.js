import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Colors } from "../components/wagerbase";

function NewWager() {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: Colors.grey.background,
        height: "100%",
      }}
    ></View>
  );
}

export default NewWager;