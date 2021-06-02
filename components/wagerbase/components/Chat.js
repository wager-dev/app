import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../util";
import { WagerText } from "../";
import { Entypo } from '@expo/vector-icons';
import { ProfilePicture } from "./ProfilePicture";

export const Chat = ({ profileImage, name, lastMessage, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}>
        <ProfilePicture url={profileImage} size="medium" />
      </View>
      <View style={styles.messageContents}>
        <View style={styles.userName}>
          <WagerText type="bold">{name}</WagerText>
        </View>
        <View style={styles.messageTimestamp}>
          <View style={styles.lastMessage}>
            <WagerText type="regular">{lastMessage}</WagerText>
          </View>
          <View style={styles.bufferDot}>
            <Entypo name="dot-single" size={14} color="white" />
          </View>
          <View style={styles.timeStamp}>
            <WagerText type="regular">{time}</WagerText>
          </View>
        </View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 348,
    marginTop: 12,
    marginBottom: 12,
  },
  profilePicture: {
    paddingRight: 20
  },
  messageTimestamp: {
    display: "flex",
    flexDirection: "row"
  },
})