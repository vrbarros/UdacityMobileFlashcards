import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Button from '../components/Button';

import { newDeck } from '../ducks';

import { submitDeck } from '../utils/api';

import { white, gray, red } from '../utils/colors'

class New extends Component {
  state = {
    input: '',
  };

  handleTextChange = input => {
    this.setState(() => ({
      input,
    }));
  };

  submit = () => {
    const title = this.state.input;

    if ( title !== '') {
      const key = title;

      const deck = {
        title: this.state.input,
        questions: [],
      };
  
      this.props.dispatch(
        newDeck({
          [key]: deck,
        }),
      );
  
      this.setState(() => ({ input: '', alert: false }));
  
      this.props.navigation.navigate('DeckList');
  
      submitDeck({ deck, key });
    } else {
      this.setState(() => ({
        alert: true
      }));
    }
  };

  render() {
    let { input, alert } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <Text style={{ fontSize: 28, textAlign: 'center', marginBottom: 20 }}>
            Defina um título para sua coleção de cartões
          </Text>
          <TextInput
            value={input}
            style={!alert ? styles.input : styles.highlight}
            onChange={event => this.handleTextChange(event.nativeEvent.text)}
          />
          <Button onPress={() => this.submit()}>Salvar</Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: gray,
    fontSize: 24,
    marginBottom: 25,
  },
  highlight: {
    padding: 15,
    borderWidth: 1,
    borderColor: red,
    fontSize: 24,
    marginBottom: 25,
  }
});

export default connect()(New);
