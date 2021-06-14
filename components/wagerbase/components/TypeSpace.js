import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Colors } from "../util";
import { WagerText } from "..";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const TypeSpace = ({message, incoming}) => {
  return (
    <View style={styles.container}>
      <View style={styles.type}>
          <WagerText type="regular" style={styles.placeholder}>
            Enter Message
          </WagerText>
      </View>
      <View style={styles.send}>
        <MaterialCommunityIcons name="send-circle" size={30} color={Colors.white} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.grey.dark,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  type: {
    display: "flex",
    backgroundColor: Colors.grey.light,
    width: "65%",
    height: 30,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  placeholder: {
    paddingLeft: 8,
    color: Colors.white,
    fontSize: 15,
  },
  send: {
    paddingLeft: 10,
  },
});
