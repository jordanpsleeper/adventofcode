import {open} from 'node:fs/promises';

const file = await open('./input.txt');

const pairs = []
for await (const line of file.readLines()){
    // console.log('line', line, getNumbers(line));
    pairs.push(getNumbers(line));
}

const sum = pairs.reduce((acc, n) => acc + n, 0);

console.log(sum);
function getNumbers(str) {
    const blah = /(?=(one|two|three|four|five|six|seven|eight|nine|[123456789]))/gi
    const numbers = [...str.matchAll(blah)].map(node => node[1])

    console.log('numb', numbers)
    const first = letterNumbers(numbers.at(0));
    const last = letterNumbers(numbers.at(-1));
    return first * 10 + last;
}

function letterNumbers(value){
    const aMap = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five:5,
        six:6,
        seven:7,
        eight:8,
        nine:9
    }
    if(isNaN(parseInt(value))){
        return aMap[value]
    }
    return parseInt(value);
}