import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { WagerText } from './WagerText'
 
import { Colors } from "../util";

export const Offers = ({ requests }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
    >
      <View style={styles.offersBox}>
        <View style={styles.offersContent}>
          <WagerText type="bold">
            <Text style={styles.offersRequestLine}>{requests} New Wager Requests!</Text>
          </WagerText>
          <WagerText type="regular">
            <Text style={styles.offersMessage}>See your current wager requests from your friends </Text>
          </WagerText>
          <View style={ styles.offersOpenWrapper }>
            <WagerText type="bold">
              <Text style={styles.offersOpenTag}>OPEN INBOX</Text>
            </WagerText>
          </View>
        </View>
        <View style={styles.offersBellIcon}>
          <FontAwesome name="bell-o" size={24} color="white" />
        </View>
      </View>
    </TouchableOpacity>
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
    width: "80%",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 20
  },
  
  offersBellIcon: {
    width: "20%",
    alignItems: "flex-end",
    paddingTop: 10,
    paddingRight: 10
  },
  
  offersRequestLine: {
    flexDirection: "row"
  },
  
  offersMessage: {
    fontSize: 13,
    paddingTop: 4,
    paddingBottom: 25
  },
  
  offersOpenTag: {
    fontSize: 13
  },
  offersOpenWrapper: {
    paddingTop: 20
  }
})
