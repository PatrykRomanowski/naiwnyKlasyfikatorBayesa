const hejtObjectWords = require('./data.js');

const test = ["wredny", "empatia"];

const allCategories = [
    [],
    []
];

let isHejt = 1;
let notHejt = 1;

let isHejtCounterWord = 0;
let notHejtCounterWord = 0;

for (const category in hejtObjectWords) {
    // console.log(hejtObjectWords[category]);
    // console.log(hejtObjectWords[category][0])
    if (hejtObjectWords[category][0] === 'tak') {
        for (const item in hejtObjectWords[category]) {
            if (item === "0") {
                continue;
            }
            const newWord = hejtObjectWords[category][item];
            const existingWord = allCategories[0].find(obj => obj.word === newWord);
            isHejtCounterWord++;

            if (!existingWord) {
                allCategories[0].push({
                    word: newWord,
                    counter: 1
                });
            } else {
                existingWord.counter += 1;
            }
        }
    } else {
        for (const item in hejtObjectWords[category]) {
            if (item === "0") {
                continue;
            }
            const newWord = hejtObjectWords[category][item];
            const existingWord = allCategories[1].find(obj => obj.word === newWord);
            notHejtCounterWord++;

            if (!existingWord) {
                allCategories[1].push({
                    word: newWord,
                    counter: 1
                });
            } else {
                existingWord.counter += 1;
            }
        }
    }
}


console.log(allCategories);
console.log(isHejtCounterWord);
console.log(notHejtCounterWord);

for (const item of test) { // obliczanie współczynnika czy komentarz jest hejtem
    console.log(item);
    const existingWord = allCategories[1].find(obj => obj.word === item);
    if (!existingWord) {
        console.log(`Word "${item}" not found in allCategories[0].`);
        isHejt *= 1 / isHejtCounterWord;
    } else {
        console.log(`Found existing word "${item}". Counter: ${existingWord.counter}`);
        isHejt *= existingWord.counter / isHejtCounterWord;
    }
}

for (const item of test) { // obliczanie współczynnika czy komentarz nie jest hejtem
    console.log(item);
    const existingWord = allCategories[0].find(obj => obj.word === item);
    if (!existingWord) {
        // console.log(`Word "${item}" not found in allCategories[0].`);
        notHejt *= 1 / notHejtCounterWord;
    } else {
        // console.log(`Found existing word "${item}". Counter: ${existingWord.counter}`);
        notHejt *= existingWord.counter / notHejtCounterWord;
    }
}

console.log(isHejt);
console.log(notHejt);