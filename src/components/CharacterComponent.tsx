import { motion } from "motion/react";
import React from "react";

type CharacterComponentProps = {
  children: React.ReactNode;
  index: number;
  duration?: number;
};

const CharacterComponent = ({
  children,
  index,
  duration = 0.2,
}: CharacterComponentProps) => {
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
      {children}
    </motion.span>
  );
};

export default CharacterComponent;
