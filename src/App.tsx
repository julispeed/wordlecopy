import {useState } from "react";
import useWords from "./Hooks/useWords";
import Guesses from "./Components/Guesses";
import useKeyboard from "./Hooks/useKeyboardProps";
import "./styles/stylesStates.css";
export default function WordleApp() {
  const word = useWords() || "";
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [isgameover, setIsgameover] = useState(false);

  const submitGuess = () => {
    if (currentGuess.length !== 5) return;
    const nextGuesses = [...guesses];
    nextGuesses[guesses.findIndex(g => g === null)] = currentGuess;
    setGuesses(nextGuesses);
    setCurrentGuess("");
    const isCorrect = currentGuess === word;
    if (isCorrect) {
      setIsgameover(true);
    }
  };

  useKeyboard({
    onKey: (key) => {
      if (key === "Enter") {
        submitGuess();
        return;
      }

      if (key === "Backspace") {
        setCurrentGuess(prev => prev.slice(0, -1));
        return;
      }

      if (/^[a-zA-Z]$/.test(key)) {
        setCurrentGuess(prev =>
          prev.length < 5 ? prev + key.toUpperCase() : prev
        );
      }
    }
  });

  return (
    <div>
      <div className="word">{word}</div>
     <Guesses
  guesses={guesses}
  currentGuess={currentGuess}
  word={word}
/>
    </div>
  );
}