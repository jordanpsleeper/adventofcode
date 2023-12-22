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

// part 2 is about finding the maximums of a game for each color
function parse(line) {
    const [gameId, gameData] = line.split(': ');
    const id = parseInt(gameId.replace('Game ', ''));
    const sets = gameData.split('; ')

    const maximums = {
        red: 0,
        green: 0,
        blue: 0
    };

    sets.forEach(set => {
        const cubes = set.split(', ') // 1 blue, 1 red

        const data = cubes.reduce((acc, cube) => {
            const [value, key] = cube.split(' '); // 1 blue => ['1','blue']
            acc[key] = parseInt(value);
            return acc;
        }, {});

        if(data.red > maximums.red){
            maximums.red = data.red;
        }
        if(data.blue > maximums.blue){
            maximums.blue = data.blue;
        }
        if(data.green > maximums.green){
            maximums.green = data.green;
        }

    });

    console.log(maximums);

    return maximums.red * maximums.blue * maximums.green;
}