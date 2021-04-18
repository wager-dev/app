import * as React from "react";
import { Button, View, Text } from "react-native";
import Header from "./Header";
import { Icon } from "./wagerbase";
import { Spread } from "./wagerbase";

function Home({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#606060",
        height: "100%",
      }}
    >
      <View>
        <Header />
      </View>
      <View>
        <View style={{ margin: 10 }}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Create New Wager
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 50,
            marginTop: 0,
            justifyContent: "space-between",
          }}
        >
          <Icon type="NBA"></Icon>
          <Spread value={"+5.5"} />
        </View>
      </View>
    </View>
  );
}

export default Home;
