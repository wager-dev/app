import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Create from "../components/Create";
import NewWager from "../screens/NewWager";

const NewWagerStack = createStackNavigator();

export default () => (
  <NewWagerStack.Navigator>
    <NewWagerStack.Screen
      name="Create"
      component={Create}
      options={{
        title: "",
        headerShown: false,
      }}
    />
    <NewWagerStack.Screen
      name="New Wager"
      component={NewWager}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#241f1e",
        },
        headerTintColor: "white",
      }}
    />
  </NewWagerStack.Navigator>
);
