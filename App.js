import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, Text, View} from 'react-native';
import Timer from './timer';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <SafeAreaView>
        <Timer time={10}/>
      </SafeAreaView>    
    );
  }
}