import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "./Header";

import { WagerText } from "./wagerbase";
import { TimeFilter } from "./wagerbase";
import { WagerResults } from "./wagerbase";
 
function Results({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#606060",
        height: "100%",
      }}
    >
      <Header />
      <ScrollView>
        <View>
          <View style={styles.titleText}>
              <WagerText type="title">Results</WagerText>
          </View>
          <View style={styles.container}>
            <View style={styles.timeFilter}>
              <TimeFilter time="Day" selected/>
              <TimeFilter time="Week"/>
              <TimeFilter time="Month"/>
            </View>
            <View style={styles.resultsCards}>
              <WagerResults team="UCLA" spread="-5.5" outcome="Won" amount="+78K" />
              <WagerResults team="NY Knicks" spread="+5.5" outcome="Lost" amount="(-40K)" />
              <WagerResults team="Dallas" spread="+5.5" outcome="Lost" amount="(-40K)" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  titleText: {
    marginTop: 10,
  },
  titleText: {
    paddingLeft: 20,
    paddingTop: 20
  },
  timeFilter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingTop: 20
  },
  resultsCards: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    
  }

});

export default Results;
