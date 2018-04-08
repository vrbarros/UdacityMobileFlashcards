import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { deepOrange } from '../utils/colors'

export default class TopBar extends React.Component {
  render() {

    return (
      <View style={{ backgroundColor: deepOrange, height: Constants.statusBarHeight }}>
        <StatusBar translucent {...this.props} />
      </View>
    );
  }
}
