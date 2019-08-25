import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}} />
};

const styles = StyleSheet.create({
    input: {
        padding: 5,
        height: 35,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3
    }
});

export default Input;