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

class Main extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    next() {
        // this.props.navigator.push({
        //     title: 'test',
        //     component: Next
        // });
        this.props.navigator.push({
            title: 'Test',
            component: Next
        });
    }

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

                    <Button small bordered info onPress={this.next.bind(this)}> Test </Button>
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
});

module.exports = Main;