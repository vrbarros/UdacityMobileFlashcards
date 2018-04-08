import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gray, white } from '../utils/colors'

export default class DeckListCard extends React.Component {
  render() {
    let { title, questions, index } = this.props.item;

    return (
      <TouchableOpacity
        style={styles.deck}
        onPress={() => this.props.handlePress(['Deck', title])}>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.deckSubTitle}>
          {questions.length + (questions.length === 1 ? ' pergunta' : ' perguntas')}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  deck: {
    borderBottomWidth: 1,
    borderColor: gray,
    padding: 40,
  },
  deckTitle: {
    textAlign: 'center',    
    fontSize: 18,
  },
  deckSubTitle: {
    fontSize: 18,
    color: gray,
    textAlign: 'center',
  },
});
