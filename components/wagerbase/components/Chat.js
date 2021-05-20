import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../util";
import { WagerText } from "../";
import { Entypo } from '@expo/vector-icons';

export const Chat = ({ profileImage, name, lastMessage, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}>
        <Entypo name="circle" size={50} color="white" />
      </View>
      <View style={styles.messageContents}>
        <View style={styles.userName}>
          <WagerText type="bold">Charles</WagerText>
        </View>
        <View style={styles.messageTimestamp}>
          <View style={styles.lastMessage}>
            <WagerText type="regular">This game tho</WagerText>
          </View>
          <View style={styles.bufferDot}>
            <Entypo name="dot-single" size={14} color="white" />
          </View>
          <View style={styles.timeStamp}>
            <WagerText type="regular">3:30 pm</WagerText>
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
    marginTop: 20,
    marginBottom: 20,
  },
  profilePicture: {
    paddingRight: 20
  },
  messageTimestamp: {
    display: "flex",
    flexDirection: "row"
  },
})