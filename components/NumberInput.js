import React, {useState} from 'react';
import {View,Text,Button,StyleSheet, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import Card from './Card';
import Colors from '../constants/colors';
import Input from './Input';
import Number from './Number';

const NumberInput = props => {
    const [inputValue, setInput] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputValidation = inputValue =>{
        setInput(inputValue.replace(/[^0-9]/g, ''))
    };

    const resetInputHandler = () => {
        setInput('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(inputValue);
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number needs to be between 1 and 99'
            ,[{text:'Okay', style:'destructive', onPress:resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(inputValue));
        setInput('');
    };
    let confirmedOutPut;
    if(confirmed){
        confirmedOutPut = (
        <Card style={styles.chosenNumber}>
            <Text>You selected:</Text>
            <Number>{selectedNumber}</Number>
            <Button title="START GAME" color={Colors.primary}
            onPress={()=> props.onGameStart(selectedNumber)}
            />
        </Card>);
    }

    return(
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
    <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>
        <Card style={styles.inputContainer}>

        <Input blurOnSubmit autoCorrect={false}
        keyboardType="number-pad" maxLength={2}
        onChangeText={numberInputValidation}
        value = {inputValue}
        />
            <View style={styles.buttonsContainer}>

            <View style={styles.button}>
            <Button title="Reset" color={Colors.accent}
            onPress={resetInputHandler} />
            </View>

            <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary}
            onPress={confirmInputHandler}
            />
            </View>

            </View>
        </Card>
        {confirmedOutPut}
    </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems: 'center',
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        backgroundColor:'white',
        maxWidth:'80%',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonsContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
    },
    button:{
        width:'40%'
    },
    chosenNumber:{
        marginVertical:30,
        backgroundColor:"white",
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default NumberInput;