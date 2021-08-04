import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { WagerText } from "../..";

export const InviteFriends = () => {
  return (
    <View style={styles.container}>
      <Feather name="plus-circle" size={50} color="white" />
      <View style={styles.text}>
        <WagerText type="regular"> Invite Friend</WagerText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    marginRight: -10
  },

  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 3,
  },
});
