import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

//importing components
import Header from './components/Header';
import NumberInput from './components/NumberInput';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  var [guessRounds, setGuessRounds] = useState(0);
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  }

  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <NumberInput onGameStart={startGameHandler}/>;

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  } else if (guessRounds>0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGame}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess the number"/>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  }
})

export default App;