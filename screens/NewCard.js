import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Button from '../components/Button';
import TextButton from '../components/TextButton';

import { newDeck, newCard } from '../ducks';

import { submitDeck } from '../utils/api';

import { white, gray, red } from '../utils/colors'

class NewCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Novo Cartão',
    };
  };

  state = {
    question: '',
    answer: '',
  };

  handleQuestionOnChange = input => {
    this.setState(state => ({
      ...state,
      question: input,
    }));
  };

  handleAnswerOnChange = input => {
    this.setState(state => ({
      ...state,
      answer: input,
    }));
  };

  submit = () => {
    const { deckId } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    let { decks } = this.props;

    if (question !== '') {
      if (answer !== '') {
        let deck = { ...decks[deckId] };
        const key = deckId;
        deck.questions.push({ question, answer });
    
        this.props.dispatch(
          newCard({
            [key]: deck,
          }),
        );
    
        this.setState(() => ({ question: '', answer: '' }));
    
        this.props.navigation.goBack();
    
        submitDeck({ deck, key });
      }
    }
  };

  render() {
    let { question, answer } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={{ fontSize: 18, marginBottom: 12, fontWeight: 'bold' }}>Pergunta</Text>
        <TextInput
          autoFocus
          value={question}
          style={styles.input}
          onChange={event => this.handleQuestionOnChange(event.nativeEvent.text)}
        />
        <Text style={{ fontSize: 18, marginBottom: 12, fontWeight: 'bold' }}>Resposta</Text>
        <TextInput
          autoFocus
          value={answer}
          style={styles.input}
          onChange={event => this.handleAnswerOnChange(event.nativeEvent.text)}
        />
        <Button style={{ marginBottom: 20 }} onPress={() => this.submit()}>
          Salvar
        </Button>
        <TextButton onPress={() => this.props.navigation.goBack()}>Cancelar</TextButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 18,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: gray,
    fontSize: 20,
    marginBottom: 18,
  }
});

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(NewCard);
