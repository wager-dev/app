import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { default as getTeamLogo } from "../../NBALogos";
import { ProfilePicture } from "./ProfilePicture";

export const TeamAndProfilePicture = ({ url, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}>
        <ProfilePicture url={url} size="small" />
      </View>
      <View style={styles.teamLogo}>{getTeamLogo({ icon })}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  teamLogo: {
    marginLeft: "-30%",
    // paddingTop: "5%"
  },
});
