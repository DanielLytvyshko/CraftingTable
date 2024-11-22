import React from "react";

const ResultSlot = ({ result }: { result: string | null }) => {
    return (
        <div className="result-slot">
            {result ? (
                <img src={`/assets/${result}.png`} alt={result} />
            ) : (
                <span>?</span>
            )}
        </div>
    );
};

export default ResultSlot;
