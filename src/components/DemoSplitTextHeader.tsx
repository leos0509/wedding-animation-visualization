import { motion } from "motion/react";
import SplitTextAtChar from "./SplitTextAtChar";

type Line = {
  text: string;
  className?: string;
};

const fisrtLine = "Come";
const secondLine = "And";
const thirdLine = "Join us";

const lines: Line[] = [
  {
    text: fisrtLine,
    className:
      "text-6xl font-bold text-maroon leading-none font-serif uppercase",
  },
  {
    text: secondLine,
    className:
      "text-5xl font-semibold italic text-maroon leading-none font-serif uppercase",
  },
  {
    text: thirdLine,
    className:
      "text-6xl font-bold text-maroon leading-none font-serif uppercase",
  },
];

function calculateTotalDelay(index: number) {
  let totalDelay = 0;
  for (let i = 0; i < index; i++) {
    totalDelay += lines[i].text.length * 0.05;
  }
  return totalDelay;
}

const DemoSplitTextHeader = () => {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-0 py-8">
      {lines.map((line, index) => (
        <motion.h1 key={index} className={`inline-block ${line.className}`}>
          <SplitTextAtChar
            text={line.text}
            delay={calculateTotalDelay(index)}
            isNoClassName
          />
        </motion.h1>
      ))}
    </div>
  );
};

export default DemoSplitTextHeader;
