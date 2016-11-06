/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS
} from 'react-native';

import HomeTab from './App/Components/HomeTab';

export default class FishProject extends Component {
  constructor() {
    super();
    this.state ={selectedTab: 'homeTab'}
  }

  setTab(tabId){
    this.setState({selectedTab: tabId})
  }

  render() {
    // return (
    //   <NavigatorIOS
    //     initialRoute={{
    //       component: Main,
    //       title: "Fish Tracker"
    //     }}
    //     style={{flex: 1}}
    //   />
    // );
     
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selectedTab==='homeTab'}
          onPress={() => this.setTab('homeTab')}>
          <HomeTab/>
        </TabBarIOS.Item>
        
        <TabBarIOS.Item
          systemIcon="featured"
          selected={this.state.selectedTab==='liveTab'}
          onPress={() => this.setTab('liveTab')}>
          <View style={styles.container}>
            <Text>Live Tab</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab==='moreTab'}
          onPress={() => this.setTab('moreTab')}>
          <View style={styles.container}>
            <Text>More Tab</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

class Main2 extends Component {
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
}

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
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

AppRegistry.registerComponent('FishProject', () => FishProject);
