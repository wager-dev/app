import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

export const ProfilePicture = ({ url, size }) => {
  return (
    <View>
      <Image source={{ uri: url }} style={styles[size]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  large: {
    width: 90,
    height: 90,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  medium: {
    width: 55,
    height: 55,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  small: {
    width: 50,
    height: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
})
