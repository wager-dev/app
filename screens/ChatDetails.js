import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { WagerText } from "../components/wagerbase"
import { SentMessage } from "../components/wagerbase"
 
function chatDetails() {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#606060",
        height: "100%",
      }}
    >
      <ScrollView>
        <View style={Styles.container}>
          <View style={Styles.dateTime}>
            <WagerText type="bold">
              Today at 7:20 pm
            </WagerText>
          </View>
          <View style={Styles.sentMessage}>
            <SentMessage />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dateTime: {
    margin: 10
  },
})

export default chatDetails