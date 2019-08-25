import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import SelectedCard from '../components/SelectedCard';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberCard from '../components/NumberCard';

const StartGameScreen = props => {
    const [inputValue, setInputValue] = useState('');
    const [selectedNumber, setSelectedNumber] = useState();
    const [isConfirmed, setIsConfirmed] = useState(false);

    const inputChangeHandler = input => {
        setInputValue(input.replace(/[^0-9]/g, ''));
    }

    const inputResetHandler = () => {
        setInputValue('');
    };

    const inputConfirmeHandler = () => {
        const chekedNumber = parseInt(inputValue);
        
        if (isNaN(chekedNumber) || 
            chekedNumber == undefined || //Check is value undefined or null 
            chekedNumber <= 0 || 
            chekedNumber > 99) 
        {
            Alert.alert('Wrong number',
                        'Number should be between 1 and 99', 
                        [{text: 'OK', style: 'destructive', onPress: inputResetHandler}])
            return;
        }

        setSelectedNumber(chekedNumber);
        setIsConfirmed(true);
        setInputValue('');

        Keyboard.dismiss();
    }

    const newGameHanler = () => {
        props.onNewGamePress(selectedNumber)
    };

    let gameStartContainer;

    if (isConfirmed) {
        gameStartContainer = (
            <NumberCard title="Selected number" number={selectedNumber}>
                <CustomButton
                    title="NEW GAME"
                    onPress={newGameHanler}
                    style={styles.gameStartButton}
                    color={Colors.green}
                />
            </NumberCard>
            )
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <SelectedCard style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        maxLength={2} 
                        keyboardType="number-pad" 
                        autoCompleteType="off"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={inputChangeHandler}
                        value={inputValue}
                    />
                    <View style={styles.buttonContainer}>
                        <CustomButton title="Reset" color={Colors.red} onPress={inputResetHandler} />
                        <CustomButton title="Confirm" color={Colors.green} onPress={inputConfirmeHandler} />
                    </View>
                </SelectedCard>
                {gameStartContainer}
            </View>
        </TouchableWithoutFeedback>
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
        width: 50,
        marginVertical: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15
    },
    gameStartButton: {
        width: 150
    }
});

export default StartGameScreen;