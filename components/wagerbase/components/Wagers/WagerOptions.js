import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { WagerText } from '../../../wagerbase';

const WagerOptions = ({ updateWagerOptions }) => {
  return (
    <View style={styles.inner}>
      <View style={styles.container}>
        <View style={styles.reject}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => updateWagerOptions(false)}
          >
            <WagerText style={{ textAlign: 'center' }}>Decline</WagerText>
          </TouchableOpacity>
        </View>

        <View style={styles.accept}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => updateWagerOptions(true)}
          >
            <WagerText style={{ textAlign: 'center' }}>Accept</WagerText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  reject: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(209, 36, 36, 0.9)',
    height: 100,
    width: '50%',
    borderBottomLeftRadius: 10,
  },
  accept: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(76, 209, 36, 0.9)',
    height: 100,
    width: '50%',
  },
});

export default WagerOptions;
