import * as React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";


import { WagerText } from "./wagerbase";
import { MenuOptions } from "./wagerbase";
import { ProfilePicture } from './wagerbase'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../components/wagerbase/util/Colors';

function Me({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#606060",
        height: "100%",
      }}
    >
      <ScrollView>
        <View style={style.backArrow}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
            <WagerText type="regular">
              <Text style={style.titleText}>Profile</Text>
            </WagerText>
        </View>
        <View style={style.container}>
        <View style={style.profilePicture}>
          <ProfilePicture url="https://pbs.twimg.com/profile_images/1392449626972827648/3gnqc9PE_x96.jpg" size="large" />
        </View>
        <View style={style.nameAndTag}>
          <View>
            <WagerText type="regular">
              <Text style={style.name}>Peter Moses</Text>
            </WagerText>
          </View>
          <View>
            <WagerText type="regular">
              <Text style={style.tag}>@petermoses32</Text>
            </WagerText>
          </View>
        </View>
        {menuOptions.map((option) => (
            <MenuOptions
              key={option.id}
              icon={option.icon}
              title={option.title}
              toggle={option.toggle}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}



const menuOptions = [
  {
    id: "001",
    title: "Profile Setting",
    icon: "x",
    toggle: false,
  },
  {
    id: "002",
    title: "Notification",
    icon: "x",
    toggle: true,
  },
  {
    id: "003",
    title: "Deposit",
    icon: "x",
    toggle: false,
  },
  {
    id: "004",
    title: "Withdraw",
    icon: "x",
    toggle: false,
  },
  {
    id: "005",
    title: "Transaction History",
    icon: "x",
    toggle: false,
  },
  {
    id: "006",
    title: "Invite Friends",
    icon: "x",
    toggle: false,
  },
  {
    id: "007",
    title: "Leave a Review",
    icon: "x",
    toggle: false,
  },
  {
    id: "008",
    title: "Contact Support",
    icon: "x",
    toggle: false,
  },
  {
    id: "009",
    title: "Log Out",
    icon: "x",
    toggle: false,
  },
]

const style = StyleSheet.create({
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
  backArrow: {
    paddingTop: 30,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    width: "56%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleText: {
    fontSize: 18
  },
  nameAndTag: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  name: {
    fontSize: 25
  },
  tag: {
    fontSize: 18
  }
});

export default Me;