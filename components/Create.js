import * as React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';

import { BlurView } from 'expo-blur';
import Header from './Header';
import { NewWager } from './wagerbase';
import { Game } from './wagerbase';
import { Colors } from './wagerbase/util';
import { games } from '../data/games';

function Home({ navigation }) {
  const [showModal, setShowModal] = React.useState(false);
  const [pickedGame, setPickedGame] = React.useState(games[0]);

  const onPressHandler = (game) => {
    setShowModal(true);
    setPickedGame(game);
  };

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
          {games.map((game) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => onPressHandler(game)}
              style={styles.touchable}
            >
              <Game
                key={game.id}
                teams={game.teams}
                date={game.date}
                title={game.title}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {showModal && (
        <>
          <BlurView
            intensity={90}
            tint={'dark'}
            style={[StyleSheet.absoluteFill]}
          />
          <Modal animationType="slide" transparent={true} visible={showModal}>
            <NewWager game={pickedGame} setShowModal={setShowModal} />
          </Modal>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 10,
  },
  chooseIcons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  touchable: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  showModal: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});

export default Home;
