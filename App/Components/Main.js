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
            style={styles.calendar}
          />

          <Text>Test the Router</Text>
          </View>
          )
      }
  };

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    calendar: {
        margin: 10,
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
});

module.exports = Main;