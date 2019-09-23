import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style={styles.content}>
                <Text>{this.props.main}</Text>
                <Text>{this.props.description}</Text>
                <Text>{this.props.temp}</Text>
                <Text>°C</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content: { 
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-between',
    },
});


   