import * as React from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";


import { WagerText } from "./wagerbase";
import { MenuOptions } from "./wagerbase";
import { ProfilePicture } from './wagerbase'
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../components/wagerbase/util';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Me({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: Colors.grey.background,
        height: "100%",
      }}
    >
      <ScrollView>
        <View style={style.container}>
          <View style={style.profileInfo}>
            <View style={style.profilePicture}>
              <ProfilePicture url="https://pbs.twimg.com/profile_images/1232464654099570689/FmeL-VEG.jpg" size="large" />
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
        </View>
        {menuOptions.map((option) => (
          <TouchableOpacity 
            activeOpacity={0.5}
          >
            <MenuOptions
              key={option.id}
              icon={option.icon}
              title={option.title}
              toggle={option.toggle}
            />
          </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const menuOptions = [
  {
    id: "002",
    title: "Notification",
    icon: <Ionicons name="notifications" size={24} color={Colors.white} />,
    toggle: true,
  },
  {
    id: "006",
    title: "Wallet",
    icon: <Entypo name="wallet" size={24} color={Colors.white} />,
    toggle: false,
  },
  {
    id: "007",
    title: "Invite Friends",
    icon: <FontAwesome5 name="user-friends" size={24} color={Colors.white} />,
    toggle: false,
  },
  {
    id: "008",
    title: "Contact Support",
    icon: <MaterialIcons name="support-agent" size={24} color={Colors.white} />,
    toggle: false,
  },
  {
    id: "001",
    title: "Profile Setting",
    icon: <Feather name="settings" size={24} color={Colors.white} />,
    toggle: false,
  },
  {
    id: "010",
    title: "Tools",
    icon: <MaterialCommunityIcons name="tools" size={24} color={Colors.white} />,
    toggle: false,
  },
  {
    id: "009",
    title: "Log Out",
    icon: <SimpleLineIcons name="logout" size={24} color={Colors.white} />,
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
  },
  profileInfo: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    marginBottom: 15
  }
});

export default Me;