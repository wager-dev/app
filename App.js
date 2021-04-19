import * as React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./components/Home";
import Wagers from "./components/Wagers";
import Results from "./components/Results";
import Chats from "./components/Chats";
import Me from "./components/Me";

import { Colors } from "./components/wagerbase";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.system.black, flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home-outline";
              } else if (route.name === "Results") {
                iconName = "trophy-outline";
              } else if (route.name === "Chats") {
                iconName = "chatbubbles-outline";
              } else if ((route.name = "Me")) {
                iconName = "person-circle-outline";
              } else {
                iconName = focused ? "ios-list-box" : "ios-list";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: Colors.orange.dark,
            activeBackgroundColor: Colors.system.black,
            inactiveTintColor: Colors.white,
            inactiveBackgroundColor: Colors.system.black,
            style: {
              // Remove border top on both android & ios
              borderTopWidth: 0,
              borderTopColor: Colors.system.black,
              elevation: 0,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            // options={{ tabBarBadge: 3 }}
          />
          <Tab.Screen name="Wagers" component={Wagers} />
          <Tab.Screen name="Results" component={Results} />
          <Tab.Screen name="Chats" component={Chats} />
          <Tab.Screen name="Me" component={Me} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
