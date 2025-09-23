import DemoSplitTextHeader from "./DemoSplitTextHeader";
import SplitTextAtChar from "./SplitTextAtChar";

function getDelayedDuration(
  index: number,
  array: string[],
  baseDuration = 0.2,
) {
  if (index === 0) return 0;
  let totalDelay = 0;

  for (let i = 0; i < index; i++) {
    totalDelay += array[i].length * baseDuration;
  }
  return totalDelay;
}

function splitToWords(inputString: string) {
  const words = inputString.split(" ");
  return words;
}

const STRING = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const HEADER_STRING = `Welcome to Our Wedding Celebration!`;

const SplitText = () => {
  const words = splitToWords(STRING);

  const logDelayByWord = () => {
    for (let i = 0; i < words.length; i++) {
      console.log(`Word: ${words[i]}, Delay: ${getDelayedDuration(i, words)}`);
    }
  };

  logDelayByWord();

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-24">
      <h1 className="text-maroon font-serif text-4xl font-semibold">Default</h1>
      <p className="flex flex-wrap items-center gap-1 text-center text-2xl">
        {words.map((word, index) => (
          <span key={index} className="inline-block">
            {word}
          </span>
        ))}
      </p>

      <h1 className="text-maroon font-serif text-4xl font-semibold">
        Split by character
      </h1>

      <SplitTextAtChar text={STRING} />

      <h1 className="text-maroon font-serif text-4xl font-semibold">Header</h1>

      <SplitTextAtChar
        text={HEADER_STRING}
        className="font-serif text-6xl font-bold"
      />

      <h1 className="text-maroon font-serif text-4xl font-semibold">Demo Header</h1>

      <DemoSplitTextHeader />
    </div>
  );
};

export default SplitText;
