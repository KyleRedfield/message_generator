// random number generator
function randomNumberGenerator(num) {
    // num is defined by .length of array below
    return Math.floor(Math.random() * num);
};

// object that holds all of the words or phrases that are randomly selected
const wordsOfEncouragement = {
    youWill: ['be amazing today', 'do great things today', 'accomplish all of your goals', 'overcome any obstacles in front of you'],
    youAre: ['incredible', 'amazing', 'intelligent', 'beautiful', 'caring', 'unique'],
    youCan: ['accomplish anything', 'accomplish whatever you set your mind out to do', 'turn your dreams into a reality', 'embrace change and adapt to new situations']
};

// storage for the words of encouragement creating a new array
let encouragementArray = [];

// loop through the object to select a random index using the random number function and .length
for (let words in wordsOfEncouragement) {
    let randomIndex = randomNumberGenerator(wordsOfEncouragement[words].length)

    switch (words) {
        case 'youWill':
            encouragementArray.push(`You Will: ${wordsOfEncouragement[words][randomIndex]}`);
            break;
        case 'youAre':
            encouragementArray.push(`You Are: ${wordsOfEncouragement[words][randomIndex]}`);
            break;
        case 'youCan':
            encouragementArray.push(`You Can: ${wordsOfEncouragement[words][randomIndex]}`);
            break;
    };
}

function encouragementJoin(encouragement) {
    const joined = encouragementArray.join('\n');
    console.log(joined);
}

encouragementJoin(encouragementArray);