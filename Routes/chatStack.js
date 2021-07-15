import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Chats from "../components/Chats";
import ChatDetails from "../screens/ChatDetails";

const ChatStack = createStackNavigator();

export default () => (
  <ChatStack.Navigator>
    <ChatStack.Screen
      name="Chats"
      component={Chats}
      options={{
        title: "",
        headerShown: false,
      }}
    />
    <ChatStack.Screen
      name="Chat Details"
      component={ChatDetails}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: "#241f1e",
        },
        headerTintColor: "white",
      }}
    />
  </ChatStack.Navigator>
);
