import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Header from './Header';
import { UpcomingWagerCard } from './wagerbase';
import { PendingWagerCard } from './wagerbase';
import { RequestWagerCard } from './wagerbase';
import { LiveWagerCard } from './wagerbase';
import { WAGERS } from '../data/wagers';
import { Colors } from '../components/wagerbase/util';

function Wagers({ navigation }) {
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: Colors.grey.background,
        height: '100%',
      }}
    >
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
              {WAGERS.map((wager) => {
                {
                  switch (wager.type) {
                    case 'live':
                      return <LiveWagerCard key={wager.id} wager={wager} />;
                    case 'pending':
                      return <PendingWagerCard key={wager.id} wager={wager} />;
                    case 'request':
                      return <RequestWagerCard key={wager.id} wager={wager} />;
                    default:
                      return <UpcomingWagerCard key={wager.id} wager={wager} />;
                  }
                }
              })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '90%',
  },
});

export default Wagers;
