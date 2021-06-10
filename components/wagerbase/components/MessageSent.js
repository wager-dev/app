import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../util";
import { WagerText } from "..";

export const MessageSent = ({message, incoming}) => {
  if (incoming) {
    return (
      <View style={styles.incoming}>
        <View>
          <WagerText type="regular" style={styles.messageContent}>
            <Text>{message}</Text>
          </WagerText>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.outgoing}>
        <View>
          <WagerText type="regular" style={styles.messageContent}>
            <Text>{message}</Text>
          </WagerText>
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
    maxWidth: "50%"
  },
  messageContent: {
      fontSize: 20,
      color: Colors.white,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
  },
  outgoing: {
    backgroundColor: Colors.grey.light,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    maxWidth: "50%"
  },
});