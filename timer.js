import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TimerMixin from 'react-timer-mixin';

const styles = StyleSheet.create({
    timerText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_time: props.time
        };
    }
    
    tick = () => {

        setTimeout(() => {
            console.log(this.state.current_time);
            this.setState({current_time: (this.state.current_time - 1)})
        }, 1000);
        
    }

    render() {
        if (this.state.current_time > 0) {
            this.tick();
        }

        return (
            <View>
                <Text style={styles.timerText}>{this.state.current_time}</Text>
            </View>
        )
    }
}