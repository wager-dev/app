import * as React from "react";
import { View, Text } from "react-native";
import Header from "./Header";
import { Game } from "./wagerbase";

const teams = [
  {
    id: "PHI",
    name: "76ers",
    spread: "-5.5",
    home: false,
  },
  {
    id: "BOS",
    name:"Celtics",
    spread: "+5.5",
    home: true,
  },
];

const date = {
  day: "3/16",
  time: "8pm",
};
 
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
        </View>
      </View>
    </View>
  );
}

export default Home;
