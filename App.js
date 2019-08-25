import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  
  const newGameHandler = number => {
    setSelectedNumber(number);
  }

  const playAgainHandler = () => {
    setSelectedNumber(null);
  }

  let showingScreen = <StartGameScreen onNewGamePress={newGameHandler} />

  if (selectedNumber) {
    showingScreen = <GameScreen selectedNumber={selectedNumber} onPlayAgain={playAgainHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {showingScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
