import { motion } from "motion/react";
import CharacterComponent from "./CharacterComponent";
type WordComponentProps = {
  input: string;
  index: number;
  duration?: number;
  isChar?: boolean;
  animationDelay?: number;
};

const WordComponent = ({
  input,
  index,
  duration = 0.2,
  isChar = false,
  animationDelay = 0,
}: WordComponentProps) => {
  if (isChar) {
    return (
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration,
          delay: animationDelay + duration * index,
        }}
        className="inline-block"
      >
        {input.split("").map((char, charIndex) => (
          <CharacterComponent
            key={charIndex}
            index={charIndex}
            duration={duration}
          >
            {char}
          </CharacterComponent>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay: duration * index,
      }}
      className="inline-block"
    >
      {input}
    </motion.span>
  );
};

export default WordComponent;
