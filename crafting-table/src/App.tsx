import { useState } from "react";
import CraftingGrid from "./components/CraftingGrid";
import Items from "./components/Items";
import ResultSlot from "./components/ResultSlot";
import "./index.css";
import { checkRecipe } from "./utils/craftingLogic";

const App = () => {
  const [grid, setGrid] = useState<string[][]>(Array(3).fill(Array(3).fill(null)));
  const [result, setResult] = useState<string | null>(null);

  const updateGrid = (row: number, col: number, item: string) => {
    const newGrid = grid.map((r, i) =>
      i === row ? r.map((c, j) => (j === col ? item : c)) : r
    );
    setGrid(newGrid);
    const recipeResult = checkRecipe(newGrid);
    setResult(recipeResult ? recipeResult.result : null);
  };

  return (
    <div className="app">
      <h1 className="title">Minecraft Crafting Table</h1>
      <div className="crafting-container">
        <Items updateGrid={updateGrid} />
        <CraftingGrid grid={grid} updateGrid={updateGrid} />
        <ResultSlot result={result} />
      </div>
    </div>
  );
};

export default App;
