import * as React from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";

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
      <View style={styles.header}>
        <Image
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1356284638759710720/ELE4hRRQ_x96.jpg",
          }}
          style={{
            width: 50,
            height: 50,
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}
        />
        <Text>
          Chat
        </Text>
        <Text>
          Chat
        </Text>
      </View>
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
        <View style={styles.container}></View>
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
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,

  },
  headerOptions: {},
});

export default Chats;
