import {open} from 'node:fs/promises';

const file = await open('./input.txt');

const pairs = []
for await (const line of file.readLines()){
    console.log('line', line, getNumbers(line));
    pairs.push(getNumbers(line));
}

const sum = pairs.reduce((acc, n) => acc + n, 0);

console.log(sum);
function getNumbers(str) {
    const numbers = str.match(/\d+/g).join('');
    return Number(`${numbers.at(0)}${numbers.at(-1)}`);
}