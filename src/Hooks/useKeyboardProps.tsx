import { useEffect } from "react";

interface UseKeyboardProps {
  onKey: (key: string) => void;
}

const useKeyboard = ({ onKey }: UseKeyboardProps) => {
  useEffect(() => {
    const handleType = (event: KeyboardEvent) => {
      onKey(event.key);
    };

    window.addEventListener("keydown", handleType);
    return () => window.removeEventListener("keydown", handleType);
  }, [onKey]);
};

export default useKeyboard;