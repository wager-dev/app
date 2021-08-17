import * as React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "../components/wagerbase";
import { CurrentBalance } from "../components/wagerbase";
import { Withdraw } from "../components/wagerbase";
import { Deposit } from "../components/wagerbase";

function ManageBalance({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate();
  };

  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: Colors.grey.background,
        height: "100%",
      }}
    >
      <View style={styles.container}>
        <CurrentBalance/>
          <TouchableOpacity style={styles.selectors} onPress={() => onPressHandler("Withdraw")}>
            <Withdraw/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectors} onPress={() => onPressHandler("Deposit")}>
            <Deposit/> 
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "center"
  },
  selectors: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: 50
  },
});


export default ManageBalance;
