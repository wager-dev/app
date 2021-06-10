import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { WagerText } from "../components/wagerbase";
import { MessageSent } from "../components/wagerbase";
 
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
          <View style={Styles.outgoing}>
            {transcript.map((message) => (
              <MessageSent 
                key={message.id}
                message={message.message}
                incoming={message.incoming}
              />
            ))}
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
    alignItems: "center",
  },
  dateTime: {
    margin: 10
  },

})

export default chatDetails
