import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Me from "../components/Me"
import ManageBalance from "../screens/ManageBalance";
import History from "../screens/History"
import Profile from "../screens/Profile"
import ContactSupport from "../screens/ContactSupport";
import LogOut from "../screens/LogOut";

const SettingsStack = createStackNavigator();

export default () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name="Settings"
      component={Me}
      options={{
        title: "",
        headerShown: false,
      }}
    />
    <SettingsStack.Screen
      name="Manage Balance"
      component={ManageBalance}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#241f1e",
        },
        headerTintColor: "white",
      }}
    />
    <SettingsStack.Screen
      name="History"
      component={History}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#241f1e",
        },
        headerTintColor: "white",
      }}
    />
    <SettingsStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#241f1e",
        },
        headerTintColor: "white",
      }}
    />
    <SettingsStack.Screen
      name="Contact Support"
      component={ContactSupport}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#241f1e",
        },
        headerTintColor: "white",
      }}
    />
    <SettingsStack.Screen
      name="Log Out"
      component={LogOut}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#241f1e",
        },
        headerTintColor: "white",
      }}
    />
  </SettingsStack.Navigator>
);
