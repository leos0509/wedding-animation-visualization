import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type SplitTextAtCharProps = {
  text: string;
  className?: string;
  isNoClassName?: boolean;
  delay?: number;
};

const SplitTextAtChar = ({
  text,
  className,
  isNoClassName = false,
  delay = 0,
}: SplitTextAtCharProps) => {
  const [chars, setChars] = useState<string[]>([]);
  useEffect(() => {
    setChars(text.split(""));
  }, [text]);

  if (chars.length === 0) return null;

  if (isNoClassName)
    return chars.map((char, i) => (
      <span key={i} className="relative inline-block overflow-hidden">
        <motion.span
          initial={{ y: "100%", x: -8 }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 0.1,
            delay: i * 0.1 + delay,
            type: "tween",
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      </span>
    ));

  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-0 text-center text-2xl",
        className,
      )}
    >
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
