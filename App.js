import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { decks } from './ducks';

import TopBar from './components/TopBar';
import Navigator from './components/Navigator';

import { orange, white } from './utils/colors';
import getDecks from './utils/decks';
import { setAppNotification } from './utils/notifications';

let store = createStore(decks);

export default class App extends React.Component {
  componentDidMount() {
    setAppNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <TopBar barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
