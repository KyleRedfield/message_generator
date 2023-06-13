// random number generator
function randomNumberGenerator(num) {
    // num is defined by .length of array below
    return Math.floor(Math.random() * num);
};

// object that holds all of the words or phrases that are randomly selected
const wordsOfEncouragment = {
    youWill: ['be amazing today', 'do great things today', 'accomplish all of your goals', 'overcome any obstacles in front of you'],
    youAre: ['incredible', 'amazing', 'intelligent', 'beautiful', 'caring', 'unique'],
    youCan: ['accomplish anything', 'accomplish whatever you set your mind out to do', 'turn your dreams into a reality', 'embrace change and adapt to new situations']
};

// storage for the words of encouragment creating a new array
let encouragementArray = [];

// loop through the object to select a random index using the random number function and .length
for (let words in wordsOfEncouragment) {
    let randomIndex = randomNumberGenerator(wordsOfEncouragment[words].length)

    switch (words) {
        case 'youWill':
            encouragementArray.push(`You Will: ${wordsOfEncouragment[words][randomIndex]}`);
            break;
        case 'youAre':
            encouragementArray.push(`You Are: ${wordsOfEncouragment[words][randomIndex]}`);
            break;
        case 'youCan':
            encouragementArray.push(`You Can: ${wordsOfEncouragment[words][randomIndex]}`);
            break;
    };
}