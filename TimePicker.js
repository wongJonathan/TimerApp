import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, DatePickerIOS} from 'react-native';

export default class TimePicker extends Component{

    constructor(){
        this.state = {
            chosenTime: new Date()
        };
    }


    render(){
        return(
            <View>
                <Text>Picker</Text>
            </View>
        );
    }
}