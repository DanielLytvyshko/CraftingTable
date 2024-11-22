import React from "react";

interface ItemsProps {
    updateGrid: (row: number, col: number, item: string) => void;
}

const itemImages = {
    stick: "../assets/stick.png",
    stone: "../assets/stone.png",
    wooden_plank: "../assets/wooden_plank.png",
    oak_log: "../assets/oak_log.png",
};


const Items: React.FC<ItemsProps> = ({ updateGrid }) => {
    const items = Object.keys(itemImages);

    return (
        <div className="items">
            {items.map((item) => (
                <div
                    key={item}
                    className="item"
                    onClick={() => updateGrid(0, 0, item)} // Example: selects the first slot
                >
                    <img src={itemImages[item as keyof typeof itemImages]} alt={item} />
                </div>
            ))}
        </div>
    );
};

export default Items;
