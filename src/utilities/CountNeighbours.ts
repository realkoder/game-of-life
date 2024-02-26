
export const updateGridBasedOnNeighbour = (grid: number[][]) => {
    const newGrid = grid.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
            const neighbours = countNeighbours(rowIndex, colIndex, grid);
            if (cell === 1 && (neighbours < 2 || neighbours > 3)) {                
                return 0;
            } else if (cell === 0 && neighbours === 3) {                
                return 1;
            } else {                
                return cell;
            }
        });
    });
    return newGrid;
}


const countNeighbours = (row: number, col: number, grid: number[][]) => {
    let count = 0;
    for (let y = -1; y <= 1; y++) {
        for (let x = -1; x <= 1; x++) {

            if (x != 0 && y != 0) {
                count += readFromCell(row + y, col + x, grid);
            }
        }
    }
    return count;
}

const readFromCell = (row: number, col: number, grid: number[][]) => {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
        return 0;
    } else {
        return grid[row][col];
    }
}