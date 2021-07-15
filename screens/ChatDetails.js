import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import { WagerText } from "../components/wagerbase";
import { MessageSent } from "../components/wagerbase";
import { TypeSpace } from "../components/wagerbase";
import { Header } from "react-navigation-stack";

function chatDetails() {
  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={Header.HEIGHT + 0}
    >
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
              <WagerText type="bold">Today at 7:20 pm</WagerText>
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
        </ScrollView>
        <View style={Styles.typeSpace}>
          <TypeSpace />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const transcript = [
  {
    id: 1,
    message: "Hey, you seeing this game?",
  },
  {
    id: 2,
    message: "Yeah, I called it!",
    incoming: true,
  },
  {
    id: 3,
    message: "Not over yet tho!",
  },
];

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  dateTime: {
    margin: 10,
  },
  typeSpace: {
    width: "100%",
  },
  messages: {
    width: "92%",
  },
});

export default chatDetails;
