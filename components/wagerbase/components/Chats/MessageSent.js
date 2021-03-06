import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../../util";
import { WagerText } from "../..";

export const MessageSent = ({ message, incoming }) => {
  if (incoming) {
    return (
      <View style={{ alignItems: "flex-end" }}>
        <View style={styles.incoming}>
          <WagerText type="regular" style={styles.messageContent}> {message} </WagerText>
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "flex-start" }}>
        <View style={styles.outgoing}>
          <WagerText type="regular" style={styles.messageContent}> {message} </WagerText>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  incoming: {
    backgroundColor: Colors.orange.light,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    maxWidth: "50%",
    alignItems: "flex-start",
    marginTop: 15,
    padding: 10
  },
  messageContent: {
    color: Colors.white,
  },
  outgoing: {
    backgroundColor: Colors.grey.light,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    maxWidth: "50%",
    alignItems: "flex-end",
    marginTop: 15,
    padding: 10
  },
});
