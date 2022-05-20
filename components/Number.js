import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const Number = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        borderColor:Colors.primary,
        borderWidth:2,
        padding:10,
        borderRadius:10,
        marginVertical:10,
    },
    number:{
        fontSize:20,
        color:Colors.accent
    }
});

export default Number;