import React from "react";
import { useDrop } from "react-dnd";
import './CraftingGrid.css';

interface CraftingGridProps {
    grid: string[][]; 
    updateGrid: (row: number, col: number, item: string) => void;
}

import stickImage from '../assets/stick.png';
import stoneImage from '../assets/stone.png';
import oakLogImage from '../assets/oak_log.png';
import woodenPlankImage from '../assets/wooden_plank.png';
import stonePickaxeImage from '../assets/Stone_Pickaxe.png';

import minecraftarrowpointer from '../assets/craftingarrow.webp';

const itemImages: Record<string, string> = {
    stick: stickImage,
    stone: stoneImage,
    oak_log: oakLogImage,
    wooden_plank: woodenPlankImage,
    stone_pickaxe: stonePickaxeImage
};

const CraftingGrid: React.FC<CraftingGridProps> = ({ grid, updateGrid }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: "ITEM",
        drop: (item: { name: string }, monitor) => {
            const { x, y } = monitor.getClientOffset()!;
            const gridElement = document.querySelector('.crafting-grid') as HTMLElement;
            const gridRect = gridElement.getBoundingClientRect();  

            const cellSize = gridElement.offsetWidth / 3;  
            const row = Math.floor((y - gridRect.top) / cellSize);
            const col = Math.floor((x - gridRect.left) / cellSize);

            if (row >= 0 && row < 3 && col >= 0 && col < 3) {
                updateGrid(row, col, item.name);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <>
            <div
                ref={drop}
                className="crafting-grid"
                style={{
                    backgroundColor: isOver && canDrop ? 'lightgreen' : 'transparent',
                }}
            >
                {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div key={`${rowIndex}-${colIndex}`} className="grid-cell">
                            {cell && <img src={itemImages[cell as keyof typeof itemImages]} alt={cell} />}
                        </div>
                    ))
                )}
            </div>
            <img src={minecraftarrowpointer} className="Minecraft-Craft-Arrow"/>
        </>
    );
};

export default CraftingGrid;
