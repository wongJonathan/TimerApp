/**
 * TimePicker is the view to select a timer value
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, DatePickerIOS, PickerIOS, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

// 3 for hour, minute, and second choices
const optionNumb = 3;

const styles = StyleSheet.create({
    pickerItem: {
        width: width/optionNumb,
    },
})

export default class TimePicker extends Component{

    constructor(props){
        super(props);

        this.state ={
            hour: '0',
            minute: '0',
            second: '0',
        }
    }

    onValueChange = (itemValue, type) => {
        this.setState({[type]: itemValue});
    }

    /**
     * Creates a picker for a given max value and sets the specified state
     * maxValue: the largest value starting from 0
     * type: The state that is to be updated
     * 
     * returns: a PickerIOS
     */
    timePicker = (maxValue, type) => {
        return (
            <PickerIOS 
            selectedValue={this.state[type]} 
            onValueChange={(itemValue) => {this.onValueChange(itemValue, type)}}>
                {
                    // Creates the range of Picker items
                    [...Array(maxValue).keys()]
                    .map((i) => <PickerIOS.Item label={i + ''} value={i + ''} />)}
            </PickerIOS> 
        );
    }

    render(){
        return(
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.pickerItem}>
                    {this.timePicker(24, 'hour')}
                </View>
                <View style={styles.pickerItem}>
                    {this.timePicker(60, 'minute')}
                </View>
                <View style={styles.pickerItem}>
                    {this.timePicker(60, 'second')}
                </View>
            </View>
        );
    }
}
