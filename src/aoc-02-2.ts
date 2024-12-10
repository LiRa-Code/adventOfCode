import { isAscii } from 'buffer';
import * as fs from 'fs';

console.log("Advent of Code Day Two | 2")


const readInputFile = (filePath: string): string => {
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        console.error("Error reading the file:", error);
        return '';
    }
};

const filePath = 'input/aoc-02.txt';
const fileContent = readInputFile(filePath);
let fileContentSplit = fileContent.split("\n");