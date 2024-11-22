import React from "react";

interface CraftingGridProps {
    grid: string[][];
    updateGrid: (row: number, col: number, item: string) => void;
}

const itemImages = {
    stick: "../assets/stick.png",
    stone: "../assets/stone.png",
    wooden_plank: "../assets/wooden_plank.png",
    oak_log: "../assets/oak_log.png",
};

const CraftingGrid: React.FC<CraftingGridProps> = ({ grid, updateGrid }) => {
    return (
        <div className="crafting-grid">
            {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className="grid-cell"
                        onClick={() => updateGrid(rowIndex, colIndex, "stick")} // Replace 'stick' with desired logic
                    >
                        {cell && <img src={itemImages[cell as keyof typeof itemImages]} alt={cell} />}
                    </div>
                ))
            )}
        </div>
    );
};

export default CraftingGrid;
