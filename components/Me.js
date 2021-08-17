import * as React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { WagerText } from "./wagerbase";
import { MenuOptions } from "./wagerbase";
import { ProfilePicture } from "./wagerbase";
import { Colors } from "../components/wagerbase/util";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


function Me({ navigation }) {
  const onPressHandler = (title) => {
    navigation.navigate(title);
  };

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
              <ProfilePicture
                url="https://pbs.twimg.com/profile_images/1232464654099570689/FmeL-VEG.jpg"
                size="large"
              />
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
            <TouchableOpacity activeOpacity={0.5} onPress={() => onPressHandler(option.title)}>
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

export const menuOptions = [
  {
    id: "001",
    title: "Manage Balance",
    icon: <SimpleLineIcons name="wallet" size={24} color="white" />,
    toggle: false,
  },
  {
    id: "002",
    title: "History",
    icon: <MaterialIcons name="history" size={26} color="white" />,
    toggle: false,
  },
  {
    id: "003",
    title: "Profile",
    icon: <AntDesign name="profile" size={24} color="white" />,
    toggle: false,
  },
  {
    id: "004",
    title: "Contact Support",
    icon: <MaterialIcons name="contact-support" size={24} color="white" />,
    toggle: false,
  },
  {
    id: "005",
    title: "Log Out",
    icon: <MaterialIcons name="logout" size={24} color="white" />,
    toggle: false,
  },
];

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
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
  },
  nameAndTag: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontSize: 25,
  },
  tag: {
    fontSize: 18,
  },
  profileInfo: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    marginBottom: 15,
  },
});

export default Me;
