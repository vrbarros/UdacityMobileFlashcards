import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Button from '../components/Button';

import { orange, white, gray } from '../utils/colors';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;
    return {
      title: deckId
    };
  };

  render() {
    let { decks, navigation } = this.props;
    let { deckId } = navigation.state.params;

    let deck = decks[deckId];

    return (
      <View style={styles.container}>
        <View style={styles.deckDisplay}>
          <View style={styles.deckDisplayContent}>
            <Text style={styles.deckTitle}>{deck.title}</Text>
            <Text style={styles.deckQuestions}>
              {deck.questions.length + (deck.questions.length === 1 ? ' pergunta' : ' perguntas')}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            buttonAlternative={true}
            onPress={() => navigation.navigate('NewCard', { deckId: deck.title })}>
            Criar Nova Pergunta
          </Button>
          <Button onPress={() => navigation.navigate('Quiz', { deckId: deck.title })}>
            Começar Quiz
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  button: {
    padding: 20,
    backgroundColor: orange,
  },
  buttonText: {
    color: white,
    fontSize: 18,
    textAlign: 'center',
  },
  deckTitle: {
    fontSize: 30,
    textAlign: 'center',
  },
  deckQuestions: {
    fontSize: 18,
    color: gray,
    textAlign: 'center',
  },
  deckDisplay: {
    flex: 3,
    justifyContent: 'center',
  },
  deckDisplayContent: {
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 25,
    flex: 1,
  },
});

function mapStateToProps(decks, { navigation }) {
  return {
    decks,
    navigation,
  };
}

export default connect(mapStateToProps)(Deck);
