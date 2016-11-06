import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,    
    Navigator,
    StatusBar,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import Calendar from 'react-native-calendar';
const colors = [
    '#ff0000',
    '#003388',
    '#0000ff',
  ];

  function getValue<T>(values: Array<T>, index: number): T {
  return values[index % values.length];
}
class HomeTab extends Component {

  state = {
    animated: true,
    backgroundColor: getValue(colors, 0),
  };

  _colorIndex = 0;

  _onChangeBackgroundColor = () => {
    this._colorIndex++;
    this.setState({backgroundColor: getValue(colors, this._colorIndex)});
  };

  _onChangeAnimated = () => {
    this.setState({animated: !this.state.animated});
  };
    render(){

      const routes = [
        {title: '30 Day View', index: 0},
        {title: 'Month', index: 1},
      ];
      return (
        <View>
          <StatusBar
            backgroundColor={this.state.backgroundColor}
            animated={this.state.animated}
          />
          <TouchableHighlight
            style={styles.wrapper}
            onPress={this._onChangeBackgroundColor}>
            <View style={styles.button}>
              <Text>backgroundColor: '{getValue(colors, this._colorIndex)}'</Text>
            </View>
          </TouchableHighlight>


          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={(route, navigator) => 
            <View>
              <StatusBar hidden={route.statusBarHidden} />
              <MonthlyScene
                title= {routes[route.index].title}

                onForward={ () => {
                  const nxtId = route.index + 1;
                  navigator.push(routes[nxtId]);
                }}

                onBack={ () => {
                  if (route.index > 0) {
                    navigator.pop();
                  }
                }}
              >
              </MonthlyScene>
            </View>
          }
          >
          </Navigator>
        </View>
      )
        // return (
        //   <View style={styles.container}>
        //     <StatusBar
        //        backgroundColor="blue"
        //        barStyle="light-content"
        //      />
        //     <Navigator
        //     initialRoute={routes[0]}
        //     initialRouteStack={routes}
        //     renderScene={(route, navigator) => 
        //       <View>
        //         <StatusBar hidden={route.statusBarHidden} />
        //         <MonthlyScene
        //           title= {routes[route.index].title}

        //           onForward={ () => {
        //             const nxtId = route.index + 1;
        //             navigator.push(routes[nxtId]);
        //           }}

        //           onBack={ () => {
        //             if (route.index > 0) {
        //               navigator.pop();
        //             }
        //           }}
        //         >
        //         </MonthlyScene>
        //       </View>
        //     }
        //     >
        //     </Navigator>
        //   </View>      
        // )
      }
};

class MonthlyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
  }

  render() {
    return (
      <View>    
        <Text>Current Scene: {this.props.title}</Text>
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