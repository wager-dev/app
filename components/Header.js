import React from "react";
import { View, Image } from "react-native";
import { WagerLogo } from "../assets"

import { Balance } from "./wagerbase";

import { useFonts, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

const Header = () => {
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
      <View style={{ width: "60%", paddingLeft: 20, order: 1, justifyContent: "flex-end" }}>
        <Image style={{width: 100, height: 40}} source={WagerLogo} />
      </View>
      <View style={{ width: "40%", order: 2, justifyContent: "flex-end"}}>
        <Balance tokenAmount={80000} />
      </View>
    </View>
  );
};

export default Header;
