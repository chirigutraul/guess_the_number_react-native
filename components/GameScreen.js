import React,{useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

import Number from './Number';
import Card from './Card';

const GameScreen = props => {
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [rounds, setRounds] = useState(0);
    const {userChoice, onGameOver} = props;

    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
    
        const randomNumber = Math.floor(Math.random() * (max-min)) + min;
    
        if(randomNumber === exclude){
            return generateRandomBetween(min, max, exclude);
        }
        else {
            return randomNumber;
        }
    }

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, props.userChoice));

    const nextGuess = direction => {
        if(direction === 'lower' && props.userChoice > currentGuess || direction === 'greater' && props.userChoice < currentGuess){
            Alert.alert("Don't lie", "Give the computer the right hint", [{text:'okay', style:'cancel'}])
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds+1);
    }

    useEffect(()=>{
        if(currentGuess == props.userChoice){
            props.onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    return(
        <View style={styles.screen}>
            <Text>Computer's guess:</Text>
            <Number style={styles.number}>{currentGuess}</Number>
            <Card style={styles.buttonContainer}>
                <Button title = "LOWER" onPress={nextGuess.bind(this, 'lower')}/>
                <Button title = "GREATER" onPress={nextGuess.bind(this, 'greater')}/>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:20,
        width: 200,
    },
});

export default GameScreen;