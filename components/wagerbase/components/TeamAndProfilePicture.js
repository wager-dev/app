import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

import { BOS } from "../../NBALogos"
import { ProfilePicture } from "./ProfilePicture"

export const TeamAndProfilePicture = () => {
  return (
    <View style={styles.container}>
        <View style={styles.profilePicture}>
          <ProfilePicture url="https://pbs.twimg.com/profile_images/1392449626972827648/3gnqc9PE_x96.jpg" size="large" />
        </View>
        <View style={styles.teamLogo}>
          <BOS/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  teamLogo: {
    marginLeft: "-10%",
    paddingTop: "5%"
  }
})