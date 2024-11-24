import React from "react";
import { useDrag } from "react-dnd";
import './itemsStyling.css';

interface ItemsProps {
    updateGrid: (row: number, col: number, item: string) => void;
}

import stickImage from '../assets/stick.png';
import stoneImage from '../assets/stone.png';
import oakLogImage from '../assets/oak_log.png';
import woodenPlankImage from '../assets/wooden_plank.png';

const itemImages: Record<string, string> = {
    stick: stickImage,
    stone: stoneImage,
    oak_log: oakLogImage,
    wooden_plank: woodenPlankImage,
};

const Items: React.FC<ItemsProps> = ({ updateGrid }) => {
    const items = Object.keys(itemImages);

    return (
        <div className="items">
            {items.map((item) => (
                <div key={item} className="item">
                    <DraggableItem name={item} />
                </div>
            ))}
        </div>
    );
};

const DraggableItem: React.FC<{ name: string }> = ({ name }) => {
    const [{ isDragging }, drag] = useDrag({
        type: "ITEM",
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <>
            <div
                ref={drag}
                className="item-image"
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    cursor: "move",
                }}
            >
                <img src={itemImages[name as keyof typeof itemImages]} alt={name} />
            </div> 
            <hr className="hr-vertical" />
        </>
    );
};

export default Items;
