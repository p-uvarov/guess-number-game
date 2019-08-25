import React, { useState, useRef } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import Colors from '../constants/Colors';
import NumberCard from '../components/NumberCard';

const randomNumber = (minNumber, maxNumber, exceptNumber) => {
    //minNumber - included, maxNumber - not included
    let number = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)

    console.log('Guessed number ' + number);
    console.log('Min number ' + minNumber);
    console.log('Max number ' + maxNumber);
    console.log('Exception number ' + exceptNumber);
    console.log('------------------');

    if (number === exceptNumber || number === minNumber) {
        number = randomNumber(minNumber, maxNumber, exceptNumber);
    }

    return number;
}

const GameScreen = props => {

    const minNumber = useRef(0);
    const maxNumber = useRef(100);
    console.log('Component rerendering - Step 1');
    const [guessedNumber, setGuessedNumber] = useState(randomNumber(0, 100, props.selectedNumber));
    console.log('Component rerendering - Step 2');
    const [attempt, setAttempt] = useState(1);

    const hintButtonHandler = direction => {
        if ((direction === 'lower' && guessedNumber < props.selectedNumber)
            || (direction === 'higher' && guessedNumber > props.selectedNumber)) 
        {
            Alert.alert(
                'Wrong hint',
                'Your are giving the wrong hint! It is not fair.',
                [{ text: 'Sorry' }]
            );

            return;
        }

        if (direction === 'lower') {
            maxNumber.current = guessedNumber;
            setGuessedNumber(randomNumber(minNumber.current, guessedNumber, guessedNumber));
        }
        else if (direction === 'higher') {
            minNumber.current = guessedNumber;
            setGuessedNumber(randomNumber(guessedNumber, maxNumber.current, guessedNumber));
        }

        setAttempt(prevState => prevState +1);
    }

    let buttonsContainer = (
        <View style={styles.buttonsContainer}>
            <CustomButton title="Lower" color={Colors.green} onPress={hintButtonHandler.bind(this, 'lower')} />
            <CustomButton title="Higher" color={Colors.green} onPress={hintButtonHandler.bind(this, 'higher')} />
        </View>
    );

    if (guessedNumber === props.selectedNumber) {
        Alert.alert(
            'Congratulatons',
            `Number was finally guessed in ${attempt} attempts!`,
            [
                {text: 'OK'}
            ]
        )

        buttonsContainer = (
            <View style={styles.buttonsContainer}>
                <CustomButton title="PLAY AGAIN" color={Colors.green} onPress={props.onPlayAgain} />
            </View>
            );
    }

    return (
        <View style={styles.screen}>
            <NumberCard title="Guessed number" number={guessedNumber}>
                {buttonsContainer}    
            </NumberCard>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default GameScreen;