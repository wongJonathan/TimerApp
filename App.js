import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity} from 'react-native';
import TimerView from './TimerView';
import AppContainer from './AppNavigator';

export default class HelloWorldApp extends Component {
  render() {
    console.log("App.js");

    return(
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <TimerView />
      </SafeAreaView>
    );
  }
}