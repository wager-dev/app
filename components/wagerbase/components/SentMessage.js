import * as React from 'react'
import { View, Text, StyleSheet } from "react-native";

import WagerText from "./WagerText"

export const SentMessage = () => {
  return (
    <View>
      <WagerText type="regular">
        <Text> Hey, you seeing this game? </Text>
      </WagerText>
    </View>
  )
}

