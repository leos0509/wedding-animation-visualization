import { motion } from "motion/react";
import { useEffect, useState } from "react";

const SplitTextAtChar = ({ text }: { text: string }) => {
  const [chars, setChars] = useState<string[]>([]);

  useEffect(() => {
    setChars(text.split(""));
  }, [text]);

  return (
    <p className="flex flex-wrap items-center gap-0 text-center text-2xl">
      {chars.map((char, i) => (
        <span key={i} className="relative inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%", x: -8 }}
            animate={{ y: 0, x: 0 }}
            transition={{ delay: i * 0.05, type: "tween", ease: "easeInOut" }}
            className="inline-block italic"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </p>
  );
};

export default SplitTextAtChar;
