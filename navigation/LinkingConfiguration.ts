import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Me: {
            screens: {
              Profile: 'me',
            },
          },
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Results: {
            screens: {
              Results: 'results',
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
