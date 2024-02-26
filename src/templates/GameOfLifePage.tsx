import GameOfLifeGrid from "@/components/GameOfLifeGrid";


const GameOfLifePage = () => {

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1>IM GAME OF LIFE</h1>
            <GameOfLifeGrid />
        </div>
    )
}

export default GameOfLifePage;