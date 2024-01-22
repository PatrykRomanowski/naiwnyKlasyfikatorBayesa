const hejtObjectWords = require('./data.js');

const test = ["mądry", "empatia"];

const allCategories = [
    [],
    []
];

let isHejt = 0;
let notHejt = 0;

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
            isHejt++;

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
            notHejt++;

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
console.log(isHejt);
console.log(notHejt);

for (const item in test) {
    console.log(test[item])
}