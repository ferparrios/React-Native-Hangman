import React, { useState } from "react";
import { View, Text, Alert, TextInput, Button, StyleSheet } from "react-native";

interface PlayBoardScreenProps {
  words: any;
}

const MAX_ATTEMPTS = 6;

export const PlayBoardScreen = ({ words }: PlayBoardScreenProps) => {
  const [word, setWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  ); // Palabra a adivinar
  const [guessedLetters, setGuessedLetters] = useState([]); // Letras adivinadas
  const [attempts, setAttempts] = useState(0); // Intentos fallidos
  const [input, setInput] = useState(""); // Entrada del usuario

  const handleGuess = () => {
    const letter = input.toUpperCase();
    if (!letter || guessedLetters.includes(letter)) {
      Alert.alert("Letra inválida o ya adivinada");
      return;
    }
    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) {
      setAttempts(attempts + 1);
    }
    setInput("");
  };

  const handleReset = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setAttempts(0);
    setInput("");
  };

  const isGameOver = attempts >= MAX_ATTEMPTS;
  const isWinner = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juego del Ahorcado</Text>
      <Text style={styles.word}>
        {word
          .split("")
          .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
          .join(" ")}
      </Text>
      <Text style={styles.attempts}>
        Intentos fallidos: {attempts} / {MAX_ATTEMPTS}
      </Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Ingresa una letra"
        maxLength={1}
        editable={!isGameOver && !isWinner}
      />
      <Button
        title="Adivinar"
        onPress={handleGuess}
        disabled={isGameOver || isWinner}
      />
      {isGameOver && (
        <Text style={styles.result}>¡Perdiste! La palabra era: {word}</Text>
      )}
      {isWinner && <Text style={styles.result}>¡Ganaste!</Text>}
      <Button title="Reiniciar" onPress={handleReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  word: {
    fontSize: 32,
    letterSpacing: 2,
    marginBottom: 20,
  },
  attempts: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: "50%",
    textAlign: "center",
    fontSize: 24,
  },
  result: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
});
