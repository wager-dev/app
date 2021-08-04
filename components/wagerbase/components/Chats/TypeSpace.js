import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { Colors } from "../../util";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const TypeSpace = ({ message, incoming }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.type}
        placeholderTextColor={Colors.white}
        placeholder="Message"
      />
      <View style={styles.send}>
        <MaterialCommunityIcons
          name="send-circle"
          size={30}
          color={Colors.white}
        />
      </View>
    </View>
  );
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
    width: "80%",
    height: 30,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 10,
    color: Colors.white,
  },
  placeholder: {
    paddingLeft: 8,
    color: Colors.white,
  },
  send: {
    paddingLeft: 10,
  },
});
