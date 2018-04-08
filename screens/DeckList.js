import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import values from 'lodash.values';

import DeckListCard from '../components/DeckListCard';

import { fetchDecks } from '../utils/api';
import { getDecks } from '../ducks';

import { orange, white } from '../utils/colors';

class DeckList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Voltar',
    };
  };

  state = {
    isLoading: true,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    fetchDecks()
      .then(decks => {
        dispatch(getDecks(decks));
      })
      .then(() => this.setState(() => ({ isLoading: false })));
  }

  handlePress = destination => {
    this.props.navigation.navigate(destination[0], { deckId: destination[1] });
  };

  renderItem = item => {
    return <DeckListCard {...item} handlePress={result => this.handlePress(result)} />;
  };

  keyExtractor = (item, index) => item.title;

  render() {
    const { decks } = this.props;
    const { isLoading } = this.state;

    if (isLoading === true) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={values(decks)}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  }
});

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);
