const hejtObjectWords = require("./data.js");

const test = [
  "szkalujący",
  "sarkastyczny",
  "podejrzliwy",
  "hojny",
  "szlachetny",
  "wyrozumiały",
];

const allCategories = [[], []];

let isHejtProbability = 1;
let notHejtProbability = 1;

let isHejtCounterWord = 0;
let notHejtCounterWord = 0;

const totalComments = Object.keys(hejtObjectWords).length;
let isHejtCategoryProbability = 0;
let notHejtCategoryProbability = 0;

for (const category in hejtObjectWords) {
  if (hejtObjectWords[category][0] === "tak") {
    isHejtCategoryProbability += 1;
  } else {
    notHejtCategoryProbability += 1;
  }

  for (let i = 1; i < hejtObjectWords[category].length; i++) {
    const newWord = hejtObjectWords[category][i];
    const existingWord = allCategories[
      hejtObjectWords[category][0] === "tak" ? 0 : 1
    ].find((obj) => obj.word === newWord);

    if (!existingWord) {
      allCategories[hejtObjectWords[category][0] === "tak" ? 0 : 1].push({
        word: newWord,
        counter: 1,
      });
    } else {
      existingWord.counter += 1;
    }

    if (hejtObjectWords[category][0] === "tak") {
      isHejtCounterWord++;
    } else {
      notHejtCounterWord++;
    }
  }
}

isHejtCategoryProbability /= totalComments;
notHejtCategoryProbability = 1 - isHejtCategoryProbability;

for (const item of test) {
  const existingWordIsHejt = allCategories[0].find((obj) => obj.word === item);
  const existingWordNotHejt = allCategories[1].find((obj) => obj.word === item);

  const wordGivenIsHejt = existingWordIsHejt
    ? existingWordIsHejt.counter / isHejtCounterWord
    : 0;
  const wordGivenNotHejt = existingWordNotHejt
    ? existingWordNotHejt.counter / notHejtCounterWord
    : 0;

  isHejtProbability *= wordGivenIsHejt !== 0 ? wordGivenIsHejt : 1;
  notHejtProbability *= wordGivenNotHejt !== 0 ? wordGivenNotHejt : 1;
}

// Obliczanie prawdopodobieństwa, że komentarz jest hejtem
const isHejtResult =
  (isHejtProbability * isHejtCategoryProbability) /
  (isHejtProbability * isHejtCategoryProbability +
    notHejtProbability * notHejtCategoryProbability);

// Obliczanie prawdopodobieństwa, że komentarz nie jest hejtem
const notHejtResult =
  (notHejtProbability * notHejtCategoryProbability) /
  (isHejtProbability * isHejtCategoryProbability +
    notHejtProbability * notHejtCategoryProbability);

console.log("jest hejtem:");
console.log(isHejtResult);
console.log("nie jest hejtem:");
console.log(notHejtResult);
