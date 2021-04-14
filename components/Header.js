import React from "react";
import { View, Text } from "react-native";


const ViewBoxesWithColorAndText = () => {
    const teams = ["PHI"];
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        paddingLeft: 10,
        paddingTop: 40,
        backgroundColor: "#241f1e"
      }}
    >
        <View style={{ flex: 0.3 }}>
            <Text 
                style={{
                    textAlign: "center",
                    margin: "auto",
                    color: "white",
                    fontFamily: "Brush Script MT",
                    fontSize: 40
                }}>
                Wager
            </Text>
        </View>
    </View>
  );
};

export default ViewBoxesWithColorAndText;