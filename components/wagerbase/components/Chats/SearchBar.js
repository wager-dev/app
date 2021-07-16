import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Colors } from "../../util";
import { WagerText } from "../..";
import { EvilIcons } from "@expo/vector-icons";

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <EvilIcons name="search" size={24} color="white" />
      </View>
      <View style={styles.text}>
        <WagerText type="bold"> Search </WagerText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: Colors.orange.light,
    borderWidth: 1,
    width: 348,
    height: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  icon: {
    paddingLeft: 13,
  },
  text: {
    paddingLeft: 15,
  },
});
