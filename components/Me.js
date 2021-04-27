import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";


import { WagerText } from "./wagerbase";
import { MenuOptions } from "./wagerbase";

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
        <View style={styles.container}>
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
});

export default Me;