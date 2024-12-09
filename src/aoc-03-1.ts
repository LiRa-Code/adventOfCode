import * as fs from 'fs';

console.log("Advent of Code Day 3 | 1");

const readInputFile = (filePath: string): string => {
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        console.error("Error reading the file:", error);
        return '';
    }
};


const filePath = 'input/aoc-03.txt';
const fileContent = readInputFile(filePath);