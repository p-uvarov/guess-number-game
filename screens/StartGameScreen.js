import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput style={styles.input} placeholder="Input selected number" />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        marginVertical: 10,
        padding: 5,
        borderColor: '#eee',
        borderWidth: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        paddingHorizontal: 10
    }
});

export default StartGameScreen;