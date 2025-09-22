import WordComponent from "./WordComponent";

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

const SplitText = () => {
  const string = "This is a sample text to be split into words.";
  const words = splitToWords(string);

  const logDelayByWord = () => {
    for (let i = 0; i < words.length; i++) {
      console.log(`Word: ${words[i]}, Delay: ${getDelayedDuration(i, words)}`);
    }
  };

  logDelayByWord();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-maroon font-serif text-4xl font-semibold">
        Split by text
      </h1>
      <p className="flex flex-wrap items-center gap-1 text-center text-2xl">
        {words.map((word, index) => (
          <WordComponent key={index} input={word} index={index} />
        ))}
      </p>
      <h1 className="text-maroon font-serif text-4xl font-semibold">
        Split by character
      </h1>

      <p className="flex flex-wrap items-center gap-1 text-center text-2xl">
        {words.map((word, index) => (
          <WordComponent
            key={index}
            input={word}
            index={index}
            isChar
            animationDelay={getDelayedDuration(index, words)}
          />
        ))}
      </p>
    </div>
  );
};

export default SplitText;
