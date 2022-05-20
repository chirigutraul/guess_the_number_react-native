import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        marginBottom: 20,
        borderRadius:10,
        borderColor:'grey',
        height:40,
        fontSize:16,
        textAlign:'center',
        width:50
    }
})

export default Input;