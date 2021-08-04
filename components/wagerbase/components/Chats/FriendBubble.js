import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { ProfilePicture } from "../MultiUse/ProfilePicture";
import { WagerText } from "../..";

export const FriendBubble = ({ name, profilePicture, picked }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconDot}>
        <ProfilePicture url={profilePicture} size="small" outlined={picked} />
        <View style={styles.dot}>
          <Entypo name="dot-single" size={40} color="#49FE02" />
        </View>
      </View>
      <View style={styles.text}>
        <WagerText type="regular">{name}</WagerText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 22,
  },

  iconDot: {
    display: "flex",
    flexDirection: "row",
  },
  dot: {
    paddingTop: 24,
    marginLeft: -31,
    marginBottom: -10
  },
  text: {
    marginLeft: -11,
  },
});
