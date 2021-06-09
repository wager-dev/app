import * as React from "react";
import { View, ScrollView, StyleSheet, Image, Text, Pressable } from "react-native";
import Header from "./Header";

import { WagerText } from "./wagerbase";
import { SearchBar } from "./wagerbase";
import { Chat } from "./wagerbase";
import { InviteFriends } from "./wagerbase";
import { FriendBubble } from "./wagerbase";

import { Colors } from '../components/wagerbase/util/Colors';

function Chats({ navigation }) {

  const onPressHandler = () => {
    navigation.navigate("Chat Details")
  }

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
          <View style={styles.friendInvites}>
            <View style={styles.inviteFriends}>
              <InviteFriends/>
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
                <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? "#241f1e" : '#ffffff00'})}>
                  <Chat 
                    key={chat.id}
                    profileImage={chat.profileImage}
                    name={chat.name}
                    lastMessage={chat.lastMessage}
                    time={chat.time}
                    />
                  </Pressable>
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const onlineFriends = [
  {
    id: 1,
    name: "Carson",
    image: "https://pbs.twimg.com/media/E2i-Y2cXwAU14ZJ.jpg"
  },
  {
    id: 2,
    name: "Cameron",
    image: "https://pbs.twimg.com/profile_images/1323319645684797446/zviNjbfV.jpg"
  },
  {
    id: 3,
    name: "Christian",
    image: "https://pbs.twimg.com/media/CirE5zkW0AECa5B.jpg"
  },
  {
    id: 4,
    name: "Riley",
    image: "https://i.pinimg.com/236x/f8/a5/e7/f8a5e747e20ac95ba19b6fb9866cf0d4.jpg"
  },
  {
    id: 5,
    name: "Chris",
    image: "https://content.fortune.com/wp-content/uploads/2015/12/gettyimages-477236666.jpg"
  },
  {
    id: 6,
    name: "Mike",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFln_OrjgNcVpqkGdKFb0-5aY5Vsku6XO6tw&usqp=CAU"
  },
]

const messageCards = [
  {
    id: 1,
    profileImage: "https://pbs.twimg.com/profile_images/1392449626972827648/3gnqc9PE_x96.jpg",
    name: "Charles",
    lastMessage: "This game tho",
    time: "3:30 pm",
  },
  {
    id: 2,
    profileImage: "https://i.pinimg.com/originals/b5/8b/6c/b58b6cd54cdaf9fbdc54480b4ebd4c53.png",
    name: "Sarah",
    lastMessage: "You: Lets gooooooo",
    time: "Tuesday",
  },
  {
    id: 3,
    profileImage: "https://pbs.twimg.com/profile_images/540360256379826177/dYi9dN3B.jpeg",
    name: "Nith",
    lastMessage: "I cant believe this",
    time: "Monday",
  },
  {
    id: 4,
    profileImage: "https://i.redd.it/fttviwctdc051.jpg",
    name: "Erik",
    lastMessage: "You: Told you",
    time: "Sunday",
  },
  {
    id: 5,
    profileImage: "https://pbs.twimg.com/profile_images/413399766630813697/W5YWHEYd.jpeg",
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
