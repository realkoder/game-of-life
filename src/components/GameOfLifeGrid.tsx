"use client"

import { updateGridBasedOnNeighbour } from "@/utilities/CountNeighbours";
import { generateBoardGrid } from "@/utilities/GenerateBoardGrid";
import { useEffect, useState } from "react";


const GameOfLifeGrid = () => {
    const [boardGrid, setBoardGrid] = useState<number[][]>();

    useEffect(() => {
        setBoardGrid(generateBoardGrid(12, 12));

    }, []);

    useEffect(() => {
        if (!boardGrid) return;

        const intervalId = setInterval(() => {
            setBoardGrid(updateGridBasedOnNeighbour(boardGrid));
        }, 1000);

        return () => clearInterval(intervalId);

    }, [boardGrid])

    return (
        <div className="grid grid-cols-12 gap-1">
            {boardGrid && boardGrid.map((col, index) => (
                <div key={index}>
                    {col.map((cell, cellIndex) => (
                        <div
                            key={cellIndex}
                            className={`border border-gray-800 flex items-center justify-center h-5 w-5 my-1 ${cell ? 'bg-gray-800' : 'bg-gray-200'}`}
                        >
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default GameOfLifeGrid;