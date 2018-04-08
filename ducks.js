/**
 * This project uses ducks reduce bundlers
 * to organize the reducer structure. More:
 * https://github.com/erikras/ducks-modular-redux
 */

// Actions

const NEW_DECK = 'NEW_DECK';
const GET_DECKS = 'GET_DECKS';
const NEW_CARD = 'NEW_CARD';

// Reducers

export function decks(state = {}, action) {
  switch (action.type) {
    case NEW_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case NEW_CARD:
      return {
        ...state,
        ...action.deck,
      };
    default:
      return state;
  }
}

// Action Creators

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function newDeck(deck) {
  return {
    type: NEW_DECK,
    deck,
  };
}

export function newCard(deck) {
  return {
    type: NEW_CARD,
    deck,
  };
}
