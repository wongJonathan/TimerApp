import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity} from 'react-native';
import Timer from './TimerView';
import AppContainer from './AppNavigator';

export default class HelloWorldApp extends Component {
  render() {
    return(<AppContainer />);
  }
}