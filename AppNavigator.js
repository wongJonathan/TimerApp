import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform, StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity} from 'react-native';
import TimerView from './TimerView';

class Home extends Component {
    render() {
        return (
            <View>
                <Text>TEssdfsdting</Text>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: TimerView
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
