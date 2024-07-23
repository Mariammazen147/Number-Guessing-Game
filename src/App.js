import React, { useState, useEffect } from "react";

const App = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  useEffect(() => {
    setTargetNumber(generateRandomNumber());
  }, []);

  const handleGuess = () => {
    const guessNumber = Number(guess);
    if (guessNumber === targetNumber) {
      setMessage(
        `Congratulations, You guessed the number in ${attempts} attempts`
      );
    } else if (guessNumber > targetNumber) {
      setMessage("Too High, Try again");
    } else {
      setMessage("Too Low, Try Again");
    }
    setAttempts(attempts + 1);
    setGuess("");
  };

  const resetGame = () => {
    setTargetNumber(generateRandomNumber());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="app">
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100: </p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <button onClick={resetGame}>Reset Game</button>
      <p>{message}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
};

export default App;
