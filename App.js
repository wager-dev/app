import * as React from "react";
import * as AppleAuthentication from "expo-apple-authentication";
import { SafeAreaView } from "react-native";
import { View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { WagerLogo } from "./assets";

import Home from "./components/Home";
import Wagers from "./components/Wagers";
import Results from "./components/Results";
import Chats from "./components/Chats";
import Me from "./components/Me";
import ChatStack from "./Routes/chatStack";
import NewWagerStack from "./Routes/NewWagerStack";

import { Colors } from "./components/wagerbase";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  const [credential, updateCredential] = React.useState(null);
  if (!credential === null) {
    return (
      <SafeAreaView style={{ backgroundColor: Colors.system.black, flex: 1 }}>
        <View
          style={{
            display: "flex",
            height: "90%",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ margin: 20 }}>
            <Image style={{ width: 120, height: 50 }} source={WagerLogo} />
          </View>
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={
              AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
            }
            buttonStyle={
              AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
            }
            cornerRadius={5}
            style={{ width: 200, height: 44 }}
            onPress={async () => {
              try {
                const returnedCredential = await AppleAuthentication.signInAsync(
                  {
                    requestedScopes: [
                      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                      AppleAuthentication.AppleAuthenticationScope.EMAIL,
                    ],
                  }
                );
                updateCredential(returnedCredential);
                // signed in
              } catch (e) {
                if (e.code === "ERR_CANCELED") {
                  // handle that the user canceled the sign-in flow
                } else {
                  // handle other errors
                }
              }
            }}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    console.log(credential);
    return (
      <SafeAreaView style={{ backgroundColor: Colors.system.black, flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = "home-outline";
                } else if (route.name === "Wagers") {
                  iconName = "log-out-outline";
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
              component={NewWagerStack}
              // options={{ tabBarBadge: 3 }}
            />
            <Tab.Screen name="Wagers" component={Wagers} />
            <Tab.Screen name="Results" component={Results} />
            <Tab.Screen name="Chats" component={ChatStack} />
            <Tab.Screen name="Me" component={Me} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

export default App;
