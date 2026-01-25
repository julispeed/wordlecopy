import { useEffect, useState } from "react";

const useWords = () => {
  const [word, setWord] = useState(null);

  useEffect(() => {
      const fetchWords = async () => {
      const res = await fetch("/api/fe/wordle-words");
      const words = await res.json();
      console.log("respuesta", words);
      const randomWord = words[Math.floor(Math.random() * words.length)];
      console.log("palabra seleccionada", randomWord);
      setWord(randomWord);
    };

    fetchWords();
  }, []);

  return word;
};

export default useWords;