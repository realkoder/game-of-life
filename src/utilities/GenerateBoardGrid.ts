import { count } from "console";

type GridIndexValue = {
    row: number;
    col: number;
}

export const generateBoardGrid = (row: number, col: number) => {
    //return Array.from({ length: row }, () => Array.from({ length: col }, () => 0));
    return randomizeAdding(Array.from({ length: row }, () => Array.from({ length: col }, () => 0)));
}

const randomizeAdding = (grid: number[][]) => {
    const insertedCells: GridIndexValue[] = [];
    let counter = 0;
    let randomRow = getRandomNumber(grid.length);
    let randomCol = getRandomNumber(grid.length);

    insertedCells.push({ row: randomRow, col: randomCol });

    while (counter <= 150) {

        if (insertedCells.findIndex(value => value.col === randomRow && value.row === randomCol) === -1) {
            grid[randomRow][randomCol] = 1;      
            insertedCells.push({ row: randomRow, col: randomCol });
            ++counter;            
        }

        randomRow = getRandomNumber(grid.length);
        randomCol = getRandomNumber(grid.length);
    }    
    return grid;
}

const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max)
}