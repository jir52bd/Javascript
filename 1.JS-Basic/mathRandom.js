

function getRandomNumber(min, max)
{
    return Math.floor(Math.random()*(max -min+1)) + min;
}

const number = getRandomNumber(1, 6);

console.log(number);