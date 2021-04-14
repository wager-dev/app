import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from "../util/";

const icons = [
  {
    type: "NBA",
    component: <Ionicons style={{textAlign: 'center'}} name="basketball-outline" size={30} color="white" />,
  },
  {
    type: "NFL",
    component: <Ionicons style={{textAlign: 'center'}} name="american-football-outline" size={30} color="white" />,
  }
];

export const Icon = ({ type }) => {
  const icon = icons.find((icon) => icon.type === type).component;
  return (
    <View style={styles.container}>
      {icon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.orange.light,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    // TODO: add global heights and widths for icons etc
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  }
}); 