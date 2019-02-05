import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform, StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity} from 'react-native';
import TimerView from './TimerView';
import TimePicker from './TimePicker';


const AppNavigator = createStackNavigator({
    Home: {
        screen: TimerView
    },
    TimePicker: {
        screen: TimePicker
    }},
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
