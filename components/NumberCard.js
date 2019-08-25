import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const NumberCard = props => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.selectedNumberTitle}>{props.title}</Text>
            <View style={styles.selectedNumberContainer}>
                <Text style={styles.selectedNumberValue}>{props.number}</Text>
            </View>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    conatiner: {
        marginTop: 30,
        height: 250,
        width: 250,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: Colors.green,
        borderWidth: 3,
        borderRadius: 10
    },
    selectedNumberContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        width: 90,
        borderRadius: 45,
        backgroundColor: Colors.green
    },
    selectedNumberTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.green
    },
    selectedNumberValue: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default NumberCard