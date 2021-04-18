import React from "react";
import { View, Text } from "react-native";

import { Balance } from "./wagerbase";

import { useFonts, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

const Home = () => {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
  });

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        height: 100,
        padding: 0,
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: "#241f1e", // TODO: make color global value
      }}
    >
      <View style={{ width: "60%", order: 1, justifyContent: "flex-start" }}>
        {fontsLoaded ? (
          <Text
            style={{
              paddingLeft: 20,
              color: "white",
              fontFamily: "Ubuntu_700Bold",
              fontSize: 40,
            }}
          >
            Wager
          </Text>
        ) : (
          <Text
            style={{
              color: "#241f1e",
              fontSize: 40,
            }}
          >
            Wager
          </Text>
        )}
      </View>
      <View style={{ width: "40%", order: 2, justifyContent: "flex-end"}}>
        <Balance tokenAmount={80000} />
      </View>
    </View>
  );
};

export default Home;
