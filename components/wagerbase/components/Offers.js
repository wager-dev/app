import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

import { Colors } from "../util";

export const Offers = ({ requests }) => {
  return (
    <View style={styles.offersBox}>
      <View style={styles.offersBellIcon}>
        <FontAwesome name="bell-o" size={24} color="black" />
      </View>
      <View style={styles.offersContent}>
        <Text style={styles.offersRequestLine}>{requests} New Wager Requests!</Text>
        <Text style={styles.offersMessage}> See your current wager requests from your friends </Text>
        <Text style={styles.offersOpenTag}>OPEN INBOX</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  offersBox: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.orange.light,
    width: "90%",
    maxWidth: 330,
    color: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  
  offersContent: {
    order: 1,
    width: "80%",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 20
  },
  
  offersBellIcon: {
    order: 2,
    width: "20%",
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 50
  },
  
  offersRequestLine: {
    fontWeight: 900,
    flexDirection: "row"
  },
  
  offersMessage: {
    paddingTop: 4,
    paddingBottom: 25
  },
  
  offersOpenTag: {
    fontWeight: 900,
    fontSize: 13
  }
})
