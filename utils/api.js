import { AsyncStorage } from 'react-native';

import { STORAGE_KEY } from './constants';

import getDecks from './decks';

export function fetchDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(retrieveDecks);
}

function retrieveDecks(results) {
  return results === null ? setInitialData() : JSON.parse(results);
}

function setInitialData() {
  let initialData = getDecks();

  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));

  return initialData;
}

export function submitDeck({ deck, key }) {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [key]: deck,
    }),
  );
}
