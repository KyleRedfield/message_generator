// random number generator
function randomNumberGenerator(num) {
    // num is defined by .length of array below
    return Math.floor(Math.random() * num)
}

// object that holds all of the words or phrases that random are selected
const wordsOfEncouragment = {
    youWill: [],
    youAre: [],
}