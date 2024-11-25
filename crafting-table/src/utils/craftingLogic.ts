import { recipes } from "./recipes";

export const checkRecipe = (grid: (string | null)[][]): { result: string } | null => {
    const recipeFound = recipes.find((recipe) =>
        recipe.patterns.some((pattern) =>
            pattern.every((row, rowIndex) =>
                Array.isArray(row) && // Ensure row is an array
                row.every((cell, colIndex) => {
                    const gridCell = grid[rowIndex]?.[colIndex] ?? null; // Safely access grid
                    return gridCell === cell;
                })
            )
        )
    );

    return recipeFound ? { result: recipeFound.result } : null;
};
