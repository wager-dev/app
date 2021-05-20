import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "./Header";

import { WagerText } from "./wagerbase";
import { SearchBar } from "./wagerbase";
import { Chat } from "./wagerbase";

function Chats({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#606060",
        height: "100%",
      }}
    >
      <Header />
      <ScrollView>
        <View style={styles.title}>
          <WagerText type="title">Chat</WagerText>
        </View>
        <View style={styles.container}>
          <View style={styles.searchBar}>
            <SearchBar/>
          </View>
          <View style={styles.chat}>
            {messageCards.map((message) => (
              <Chat 
                key={message.id}
                profileImage={message.profileImage}
                name={message.name}
                lastMessage={message.lastMessage}
                time={message.time}
                />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const messageCards = [
  {
    id: 1,
    profileImage: "tbd",
    name: "Charles",
    lasteMessage: "This game tho",
    time: "3:30 pm",
  },
  {
    id: 2,
    profileImage: "tbd",
    name: "Sarah",
    lastMessage: "You: Lets gooooooo",
    time: "Tuesday",
  },
  {
    id: 3,
    profileImage: "tbd",
    name: "Nith",
    lastMessage: "I cant believe this",
    time: "Monday",
  },
  {
    id: 4,
    profileImage: "tbd",
    name: "Erik",
    lastMessage: "You: Told you",
    time: "Sunday",
  },
  {
    id: 5,
    profileImage: "tbd",
    name: "Alex",
    lastMessage: "You: Cmon dude",
    time: "April 12th",
  }
]

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
  },
  titleText: {
    marginTop: 10,
  },
  chooseIcons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  title: {
    paddingLeft: 30,
    paddingTop: 10,
    marginTop: 10,
  }
});

export default Chats;