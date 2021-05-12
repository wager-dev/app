import * as React from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";

import { WagerText } from "./wagerbase";

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
        <View style={styles.container}></View>
      </ScrollView>
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
