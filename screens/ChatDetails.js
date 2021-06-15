import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { WagerText } from "../components/wagerbase";
import { MessageSent } from "../components/wagerbase";
import { TypeSpace } from "../components/wagerbase";

 
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
          <View style={Styles.top}>
            <View style={Styles.dateTime}>
              <WagerText type="bold">
                Today at 7:20 pm
              </WagerText>
            </View>
            <View style={Styles.messages}>
              {transcript.map((message) => (
                <MessageSent 
                  key={message.id}
                  message={message.message}
                  incoming={message.incoming}
                />
              ))}
            </View>
          </View>
          <View style={Styles.typeSpace}>
            <TypeSpace />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const transcript = [
  {
    id: 1,
    message: "Hey, you seeing this game?",
  },
  {
    id: 2,
    message: "Yeah, I called it!",
    incoming: true
  },
  {
    id: 3,
    message: "Not over yet tho!",
  }
]

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  dateTime: {
    margin: 10
  },
  typeSpace: {
    width: "100%",
  },
  messages: {
    width: "92%",
  },
  top: {
    width: "100%",
    height: 573,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
})

export default chatDetails
