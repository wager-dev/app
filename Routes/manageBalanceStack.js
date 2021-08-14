import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ManageBalance from "../screens/ManageBalance";
import Deposit from "../screens/Deposit";
import Withdraw from "../screens/Withdraw";

const ManageBalanceStack = createStackNavigator();

export default () => (
  <ManageBalanceStack.navigator>
    <ManageBalanceStack.screen
      name="Manage Balance"
        component={ManageBalance}
        options={{
          title: "",
          headerShown: false,
        }}
    />
    <SettingsStack.Screen
      name="Deposit"
      component={Deposit}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#241f1e",
        },
        headerTintColor: "white",
      }}
    />
    <SettingsStack.Screen
      name="Withdraw"
      component={Withdraw}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#241f1e",
        },
        headerTintColor: "white",
      }}
    />
  </ManageBalanceStack.navigator>
);
