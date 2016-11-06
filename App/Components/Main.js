import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Calendar from 'react-native-calendar';

class Main extends Component {
    render(){
        return (
          <View style={styles.container}>

          <Calendar
          ref="calendar"
          weekStart={0}
          />

          <Text>Test the Router</Text>
          </View>
          )
      }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Main;