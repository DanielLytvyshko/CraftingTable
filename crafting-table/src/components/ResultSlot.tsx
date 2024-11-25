import React from "react";
import './ResultSlot.css';
import stickImage from '../assets/stick.png';
import stoneImage from '../assets/stone.png';
import oakLogImage from '../assets/oak_log.png';
import woodenPlankImage from '../assets/wooden_plank.png';
import stonePickaxeImage from '../assets/Stone_Pickaxe.png';
import stoneSwordImage from '../assets/stone_sword.png';

const itemImages: Record<string, string> = {
    stick: stickImage,
    stone: stoneImage,
    oak_log: oakLogImage,
    wooden_plank: woodenPlankImage,
    stone_pickaxe: stonePickaxeImage,
    stone_sword: stoneSwordImage,
};

interface ResultSlotProps {
    result: string | null;
}

const ResultSlot: React.FC<ResultSlotProps> = ({ result }) => {
    const imageSrc = result ? itemImages[result] : null;

    return (
        <div className="result-slot">
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt={result || "result"}
                    className="result-image"
                />
            ) : (
                <span className="placeholder">?</span>
            )}
        </div>
    );
};

export default ResultSlot;
