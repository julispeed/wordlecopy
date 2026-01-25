
import { Styles } from "../styles/styles";
interface GuessesProps {
  currentGuess: string;
  guesses: (string | null)[];
  word: string;
}

const Guesses = ({ currentGuess, guesses, word }: GuessesProps) => {
  const currentIndex = guesses.findIndex(g => g === null);

  return (
    <div>
      {guesses.map((guess, index) => {
        const isCurrent = index === currentIndex;

        return (
          <Line
            key={index}
            guess={isCurrent ? currentGuess : guess ?? ""}
            itsfinal={!isCurrent && guess !== null}
            solution={word}
          />
        );
      })}
    </div>
  );
};


function Line({
  guess,
  itsfinal,
  solution
}: {
  guess: string;
  itsfinal: boolean;
  solution: string;
}) {
  const tiles = [];

  for (let i = 0; i < 5; i++) {
    const char = guess[i];
    let className = "tile";

    if (itsfinal && char) {
      if (char === solution[i]) {
        className += " correct";
      } else if (solution.includes(char)) {
        className += " close";
      } else {
        className += " wrong";
      }
    }

    tiles.push(
      <div key={i} className={className} >
        {char}
      </div>
    );
  }

  return <div className="line" style={Styles.line}>{tiles}</div>;
}

export default Guesses;