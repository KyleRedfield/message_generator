// random number generator
function randomNumberGenerator(num) {
    // num is defined by .length of array below
    return Math.floor(Math.random() * num)
}

// object that holds all of the words or phrases that are randomly selected
const wordsOfEncouragment = {
    youWill: ['be amazing today', 'do great things today', 'accomplish all of your goals', 'overcome any obstacles in front of you'],
    youAre: ['incredible', 'amazing', 'intelligent', 'beautiful', 'caring', 'unique'],
    youCan: ['accomplish anything', 'accomplish whatever you set your mind out to do', 'turn your dreams into a reality', 'embrace change and adapt to new situations']
}