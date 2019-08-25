import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = props => {
    let colorStyle = {};
    if (props.color) {
        colorStyle = {
            backgroundColor: props.color
        };
    };
    
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.buttonContainer, ...colorStyle, ...props.style}}>
                <Text style={{...styles.buttonTitle, ...colorStyle}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 20,
        minWidth: 90,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        backgroundColor: '#4388D6'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default CustomButton;