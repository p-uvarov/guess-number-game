import React from 'react';
import { View, StyleSheet } from 'react-native';

const SelectedCard = props => (
    <View style={{...styles.cardContainer, ...props.style}}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    cardContainer: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.34,
        shadowRadius: 6,
        elevation: 7,
        borderRadius: 10
    }
});

export default SelectedCard;