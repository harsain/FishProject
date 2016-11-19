import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
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
    Icon,
    Button
} from 'native-base';
import Calendar from 'react-native-calendar';
import { VictoryChart, VictoryLine, VictoryTheme } from "victory-native";

class Main extends Component {
    constructor(props) {
        super(props);
    }
    next() {
        this.props.navigator.push({
            title: 'Test',
            component: Next
        });
    }
// <Button small bordered info onPress={this.next.bind(this)}> Test </Button>
    render(){
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{flexDirection:'column', alignItems:'center'}}>
                        <Calendar
                            ref="calendar"
                            weekStart={0}
                            style={styles.calendar}
                        />
                    </View>

                    <VictoryChart theme={VictoryTheme.grayscale}>
                    <VictoryLine
                      data={[
                        {month: "September", profit: 35000, loss: 2000},
                        {month: "October", profit: 42000, loss: 8000},
                        {month: "November", profit: 55000, loss: 5000}
                      ]}
                      x="month"
                      y={(datum) => datum.profit - datum.loss}
                      interpolation="monotoneX"
                    />
                    </VictoryChart>
                </Content>
            </Container>
        )
    }
};

class Next extends Component {

    previous() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Current Scene</Text>
            </View>
      )
  }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 65,
    },
    calendar: {
        margin: 10,
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    chartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        width: 200,
        height: 200,
    }
});

module.exports = Main;
