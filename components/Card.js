import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return <View style={{...styles.numberPlate, ...props.style}}>
        {props.children}
    </View>
}

const styles = StyleSheet.create({
    numberPlate:{
        shadowColor:'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation:8,
        padding:20,
    }
})

export default Card;