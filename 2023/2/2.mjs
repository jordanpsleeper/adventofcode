import {open} from 'node:fs/promises';

const file = await open('./input.txt');

const NUMBER_STRINGS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const pairs = []
for await (const line of file.readLines()) {
    // console.log('line', line, getNumbers(line));
    pairs.push(getNumbers(line));
}

const sum = pairs.reduce((acc, n) => acc + n, 0);

// console.log(sum);

function numberFromLetters(str) {
    let temp = str;
    let match = ''

    while(temp.length >= 3 && !match){
        NUMBER_STRINGS.forEach((n, index) => {
            if(temp.startsWith(n)){
                // console.log(temp, temp.replace(n, index+1).at(0));
                match = temp.replace(n, index+1).at(0);
            }
        });
        temp = temp.slice(1);
    }

    return match;
}

function getNumbers(str) {
    const firstNumberLiteral = str.split('').findIndex(i => /\d+/g.test(i));
    const lastNumberLiteral = str.split('').findLastIndex(i => /\d+/g.test(i));
    let first = '';
    let last = '';

    // forward
    if (firstNumberLiteral >= 0) {
        const part = str.slice(0, firstNumberLiteral);
        // given this string, we test for substrings for numbers

        if (part.length >= 3 && NUMBER_STRINGS.some(numberString => part.includes(numberString))) {
            first = numberFromLetters(part) ?? -1
            // console.log('part inside', first, str, numberFromLetters(first));
        } else {
            first = str[firstNumberLiteral];
            // console.log('numberwins-------------------', first, str);
        }
    }else {
        first = numberFromLetters(str);
    }

    console.log('first', first, str);
    //backward



    const numbers = str.match(/\d+/g).join('');
    return Number(`${first}${numbers.at(-1)}`);
}