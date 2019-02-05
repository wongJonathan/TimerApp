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

    onPress = () => {
        console.log("Pressed")
        this.props.navigation.navigate('TimePicker');
    }

    render() {
        console.log("hi");
        return (
            <View>
                <TimePicker />
            {/* <Timer time={10}/>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
              <Text>Select new time</Text>
            </TouchableOpacity> */}
            </View>  
        );
      }
}
