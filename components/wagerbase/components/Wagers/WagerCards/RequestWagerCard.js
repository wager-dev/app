import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import WagerOptions from '../WagerOptions';

import { TeamAndProfilePicture } from '../../../';
import { Colors } from '../../../util';
import { WagerText } from '../../../';

export const RequestWagerCard = ({ wager }) => {
  const [showWagerOptions, setShowWagerOptions] = React.useState(false);

  const updateWagerOptions = (wagerAccepted) => {
    // MUTATION - update wagers based on response
    console.log(wagerAccepted);
    setShowWagerOptions(false);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setShowWagerOptions(!showWagerOptions)}
    >
      <View style={styles.container}>
        <View style={styles.usersAndTeams}>
          {showWagerOptions ? (
            <WagerOptions updateWagerOptions={updateWagerOptions} />
          ) : (
            <>
              <View style={styles.user}>
                <TeamAndProfilePicture
                  url={wager.teams[0].user.profile}
                  icon={wager.teams[0].icon}
                />
                <WagerText>
                  {wager.teams[0].name} {wager.teams[0].spread}
                </WagerText>
              </View>

              <View style={styles.dateTime}>
                <WagerText style={styles.centerText}>{wager.date}</WagerText>
                <WagerText style={styles.atSign}>@</WagerText>
                <WagerText style={styles.centerText}>{wager.time}</WagerText>
              </View>
              <View style={styles.user}>
                <TeamAndProfilePicture
                  url={wager.teams[1].user.profile}
                  icon={wager.teams[1].icon}
                />
                <WagerText style={styles.text}>
                  {wager.teams[1].name} {wager.teams[1].spread}
                </WagerText>
              </View>
            </>
          )}
        </View>

        <View style={styles.potentialAndStatus}>
          <WagerText type="bold" style={styles.potentialText}>
            {' '}
            40K{' '}
          </WagerText>
          <WagerText type="regular" style={styles.potentialText}>
            {' '}
            To win 78K{' '}
          </WagerText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: Colors.orange.light,
    borderWidth: 2,
  },
  usersAndTeams: {
    backgroundColor: Colors.grey.light,
    width: '80%',
    borderBottomLeftRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    width: 90,
    alignItems: 'center',
  },
  dateTime: {
    width: 80,
    alignItems: 'center',
  },
  potentialAndStatus: {
    backgroundColor: Colors.grey.dark,
    height: 100,
    width: '20%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    color: Colors.white,
    fontSize: 12,
  },
  centerText: {
    color: Colors.white,
  },
  atSign: {
    color: Colors.orange.light,
    lineHeight: 20,
  },
  potentialText: {
    color: Colors.orange.light,
  },
});
