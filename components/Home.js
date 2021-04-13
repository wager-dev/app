import * as React from "react";
import { Button, View, Text } from "react-native";
import Header from "./Header";
import { Icon } from "@wager-dev/wagerbase";

function Home({ navigation }) {
  return (
    <View style={{flexDirection: "column", backgroundColor: '#606060'}}>
      <View>
        <Header />
      </View>
      <View>
        <View style = {{margin: '0.5em'}}>
          <Text 
            style = {{
              fontSize: '2em',
              color: "white",
              textAlign: "center",
              fontWeight: 600
            }}>
              Create New Wager
            </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: "row",
            height: 50,
            margin: '2em',
            marginTop: 0,
            marginBottom: '1em',
            justifyContent: 'space-between',
          }}
        >
          <Icon type="NBA"></Icon>
          <Icon type="NFL"></Icon>
          <Icon type="NBA"></Icon>
          <Icon type="NFL"></Icon>
        </View>
      </View>
    </View>
  );
}

export default Home;
