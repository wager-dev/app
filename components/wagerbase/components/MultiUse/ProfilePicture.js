import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors } from "../../util";

export const ProfilePicture = ({ url, size, outlined }) => {
  return (
    <View>
      {!outlined ? (
        <Image source={{ uri: url }} style={styles[size]} />
      ) : (
        <Image
          source={{ uri: url }}
          style={{ ...styles[size], ...styles.outlined }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  large: {
    width: 90,
    height: 90,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderColor: Colors.orange.light,
    borderWidth: 3,
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
  outlined: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderWidth: 1,
    borderColor: Colors.orange.dark,
  },
});
