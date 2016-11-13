import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  NavigatorIOS,
  StatusBar,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { 
    Container,
    Content,
    Title,
    Card,
    CardItem,
    CheckBox,
    Icon
} from 'native-base';
import Calendar from 'react-native-calendar';
import MainHomeTab from './Main';

class HomeTab extends Component {

  render(){
    const routes = [
        {title: 'Perdiction', component: MainHomeTab},
        {title: 'Month', component: MonthlyScene2},
    ];

    return (

        <NavigatorIOS
            initialRoute={routes[0]}
            style={{flex: 1}}
        />
    )
  }
};

class MonthlyScene extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

  // render() {
  //   return (
  //     <View style={styles.tabContainer}>
  //         <Text>Current Scene: {this.props.route.title}</Text>
  //         <TouchableHighlight onPress={this._onForward}>
  //           <Text>Tap me to load the next scene</Text>
  //         </TouchableHighlight>
  //         <TouchableHighlight onPress={this._onBack}>
  //           <Text>Tap me to go back</Text>
  //         </TouchableHighlight>
  //     </View>
  //     )
  // }

  render() {
    return (
        <Container style={styles.tabContainer}>
            <Content>
                <CheckBox />
                <Text>Test</Text>
                    <Card>
                        <CardItem header>                        
                            <Text>Card Header</Text>
                        </CardItem>

                        <CardItem>                        
                            <Text>
                                //Your text here
                            </Text>
                        </CardItem>

                        <CardItem header>                        
                            <Text>Card Footer</Text>
                        </CardItem>
                   </Card>
            </Content>
        </Container>
    )
  }
};

class MonthlyScene2 extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
  }

  render() {
    return (
      <View>
      <Text>Current Scene</Text>
      <TouchableHighlight onPress={this.props.onForward}>
      <Text>Tap me to load the next scene</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.props.onBack}>
      <Text>Tap me to go back</Text>
      </TouchableHighlight>
      </View>
      )
  }
};

const styles = StyleSheet.create({
 wrapper: {
  borderRadius: 5,
  marginBottom: 5,
},
button: {
  borderRadius: 5,
  backgroundColor: '#eeeeee',
  padding: 10,
},
title: {
  marginTop: 16,
  marginBottom: 8,
  fontWeight: 'bold',
},
tabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
container: {
  flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  calendar: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = HomeTab;
