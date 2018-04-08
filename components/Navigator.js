import React from 'react';
import { View, StatusBar, Platform, Text } from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';

import { orange, white } from '../utils/colors';

import Quiz from '../screens/Quiz';
import New from '../screens/New';
import NewCard from '../screens/NewCard';
import Deck from '../screens/Deck';
import DeckList from '../screens/DeckList';

const AppTabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Coleções',
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="apps" size={35} color={tintColor} />,
        headerStyle: {
          backgroundColor: orange,
        },
        headerTintColor: white,
      },
    },
    New: {
      screen: New,
      navigationOptions: {
        tabBarLabel: 'Nova Coleção',
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="create" size={35} color={tintColor} />,
      },
    },
  },
  {
    navigationOptions: {
      header: (
        <View style={{ paddingTop: 40, paddingBottom: 40, backgroundColor: orange }}>
          <Text
            style={{
              color: white,
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Udacity Flashcards
          </Text>
        </View>
      ),
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? orange : white,
      style: {
        height: 60,
        backgroundColor: Platform.OS === 'ios' ? white : orange
      },
    },
  },
);

const AppNavigator = StackNavigator({
  Home: {
    screen: AppTabs,
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange,
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange,
      },
    },
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange,
      },
    },
  },
});

export default class Navigator extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
