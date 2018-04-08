import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { orange, white } from '../utils/colors';

export default class Button extends React.Component {
  render() {
    let { children, onPress, buttonAlternative, style } = this.props;

    return (
      <TouchableOpacity
        style={buttonAlternative ? [styles.buttonAlternative, style] : [styles.button, style]}
        onPress={onPress}>
        <Text style={buttonAlternative ? styles.buttonAlternativeText : styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: orange,
    marginBottom: 10,
    padding: 20,    
  },
  buttonText: {
    color: white,    
    textAlign: 'center',
    fontSize: 20,
  },
  buttonAlternative: {
    backgroundColor: white,
    padding: 20,
    borderWidth: 1,
    borderColor: orange,
    marginBottom: 10,
  },
  buttonAlternativeText: {
    color: orange,
    textAlign: 'center',
    fontSize: 20,
  },
});
