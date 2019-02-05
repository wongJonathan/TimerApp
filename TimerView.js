import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Timer from './Timer';
import TimePicker from './TimePicker';

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'green'
    }
  });  

export default class TimerView extends Component {
    render() {
        return (
          <SafeAreaView>
            <Timer time={10}/>
            <TouchableOpacity style={styles.button}>
              <Text>Select new time</Text>
            </TouchableOpacity>
          </SafeAreaView>    
        );
      }
}
