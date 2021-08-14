import * as React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import Header from "./Header";
import { WagerText } from "./wagerbase";
import { SearchBar } from "./wagerbase";
import { Chat } from "./wagerbase";
import { InviteFriends } from "./wagerbase";
import { FriendBubble } from "./wagerbase";
import { messageCards } from "../data/messageCards";
import { onlineFriends } from "../data/onlineFriends";
import { Colors } from "../components/wagerbase/util";

function Chats({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Chat Details");
  };

  return (
    <View
    style={{
      flexDirection: "column",
      backgroundColor: Colors.grey.background,
      height: "100%",
    }}
    >
    <Header />
    <View style={{
      height: "100%",
      justifyContent: "center"
    }}>
      <WagerText style={{
        textAlign: "center",
        fontSize: 30
      }}>
        Chat coming soon!
      </WagerText>
    </View>
       {/* <ScrollView>
        <View style={styles.title}>
          <WagerText type="bold">Chat</WagerText>
        </View>
        <View style={styles.container}>
          <View style={styles.searchBar}>
            <SearchBar />
          </View>
          <View style={styles.friendInvites}>
            <View style={styles.inviteFriends}>
              <InviteFriends />
            </View>
            <View style={styles.friendBubbles}>
              {onlineFriends.map((friend) => (
                <FriendBubble
                  key={friend.id}
                  name={friend.name}
                  profilePicture={friend.image}
                />
              ))}
            </View>
          </View>
          <View style={styles.chat}>
            {messageCards.map((chat) => (
              <TouchableOpacity activeOpacity={0.5} onPress={onPressHandler}>
                <Chat
                  key={chat.id}
                  profileImage={chat.profileImage}
                  name={chat.name}
                  lastMessage={chat.lastMessage}
                  time={chat.time}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
            </ScrollView>*/}
    </View> 
  );
}

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
  inviteFriends: {
    paddingTop: 20,
  },
  friendBubbles: {
    paddingTop: 20,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  friendInvites: {
    display: "flex",
    flexDirection: "row",
    width: "85%",
  },
});

export default Chats;
