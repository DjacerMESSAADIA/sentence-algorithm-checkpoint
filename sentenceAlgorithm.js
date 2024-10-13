const checkSentence = (sentence) => {
  let length = 0;
  let words = 1;
  let vowels = 0;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    length++;

    if (isVowel(char)) {
      vowels++;
    }

    if (char === " ") {
      words++;
    }
  }

  return {
    length,
    words,
    vowels,
  };
};

const isVowel = (char) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char.toLowerCase());
};

console.log(checkSentence("This is a test sentence for algorithm."));
