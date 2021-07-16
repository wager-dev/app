import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../../util";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";
export const WagerText = (props) => {
  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });
  if (fontsLoaded) {
    switch (props.type) {
      case "title":
        return (
          <Text style={styles.title}>
            <Text {...props}>{props.children}</Text>
          </Text>
        );
      case "bold":
        return (
          <Text style={styles.bold}>
            <Text {...props}>{props.children}</Text>
          </Text>
        );
      default:
        return (
          <Text style={styles.regular}>
            <Text {...props}>{props.children}</Text>
          </Text>
        );
    }
  }
  return <Text {...props}>{props.children}</Text>;
};
const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 40,
    fontFamily: "Ubuntu_500Medium",
  },
  bold: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: "Ubuntu_700Bold",
  },
  regular: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: "Ubuntu_400Regular",
  },
});
