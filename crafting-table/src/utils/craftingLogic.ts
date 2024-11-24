import { recipes } from "./recipes";

export const checkRecipe = (grid: string[][]): { result: string } | null => {
    const recipeFound = recipes.find((recipe) =>
        recipe.patterns.every((row: (string | null)[], rowIndex: number) =>
            row.every((cell: string | null, colIndex: number) => {
                const gridCell = grid[rowIndex]?.[colIndex] || null;
                const recipeCell = cell || null;
                return gridCell === recipeCell; 
            })
        )
    );

    return recipeFound ? { result: recipeFound.result } : null;
};
