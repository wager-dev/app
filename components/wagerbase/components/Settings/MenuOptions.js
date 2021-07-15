import * as React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Colors } from "../../util";
import { WagerText } from "../..";

export const MenuOptions = ({ icon, title, toggle }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={style.container}>
      <View style={style.leftSideMenu}>
        <View style={style.icon}>
          <WagerText type="regular">
            <Text style={style.iconText}>{icon}</Text>
          </WagerText>
        </View>
        <View style={style.title}>
          <WagerText type="regular">
            <Text style={style.titleText}>{title}</Text>
          </WagerText>
        </View>
      </View>
      <View style={style.rightSideMenu}>
        {toggle ? (
          <View style={style.toggle}>
            <Switch
              trackColor={{ false: "#767577", true: "#767577" }}
              thumbColor={isEnabled ? "#F15B09" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        ) : (
          <View style={style.arrows}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey.background,
    width: "105%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  leftSideMenu: {
    backgroundColor: Colors.grey.background,
    width: "80%",
    height: 50,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  iconText: {
    fontSize: 27,
  },
  icon: {
    paddingLeft: 9,
  },
  titleText: {
    fontSize: 19,
  },
  title: {
    paddingLeft: 10,
  },
  rightSideMenu: {
    width: "15%",
    display: "flex",
    flexDirection: "row-reverse",
  },
  arrows: {
    paddingRight: 10,
  },
  toggle: {
    paddingRight: 10,
  },
});
