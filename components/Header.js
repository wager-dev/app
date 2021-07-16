import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { WagerLogo } from "../assets";
import { Balance } from "./wagerbase";
import { Colors } from "../components/wagerbase/util";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        height: 70,
        padding: 0,
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: Colors.grey.dark,
      }}
    >
      <View
        style={{
          width: "60%",
          paddingLeft: 20,
          order: 1,
          justifyContent: "flex-end",
        }}
      >
        <Image style={{ width: 100, height: 40 }} source={WagerLogo} />
      </View>
      <View style={{ width: "40%", order: 2, justifyContent: "flex-end" }}>
        <TouchableOpacity activeOpacity={0.5}>
          <Balance tokenAmount={80000} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
