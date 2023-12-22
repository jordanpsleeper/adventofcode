import {open} from 'node:fs/promises';

const file = await open('./input.txt');

const pairs = []
for await (const line of file.readLines()) {
    // console.log('line', line, getNumbers(line));
    pairs.push(parse(line));
}

console.log('pairs', pairs);

const sum = pairs.reduce((acc, n) => acc + n, 0);

console.log(sum);


function parse(line) {
    const [gameId, gameData] = line.split(': ');
    const id = parseInt(gameId.replace('Game ', ''));
    const sets = gameData.split('; ')

    const flag = sets.every(set => {
        const cubes = set.split(', ') // 1 blue, 1 red

        const data = cubes.reduce((acc, cube) => {
            const [value, key] = cube.split(' '); // 1 blue => ['1','blue']
            acc[key] = parseInt(value);
            return acc;
        }, {});

        return !(data['red'] > 12 || data['green'] > 13 || data['blue'] > 14);

    });

    return flag ? id : 0;
}