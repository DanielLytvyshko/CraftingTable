import { recipes } from "./recipes";

// Main function to check if the recipe matches the crafting grid
export const checkRecipe = (grid: string[][]): { result: string } | null => {
    // Iterate through all the recipes
    const recipeFound = recipes.find((recipe) =>
        recipe.patterns.every((row: (string | null)[], rowIndex: number) =>
            row.every((cell: string | null, colIndex: number) => {
                const gridCell = grid[rowIndex]?.[colIndex] || null; // Default to null if undefined
                const recipeCell = cell || null; // Default to null if undefined
                return gridCell === recipeCell; // Compare the grid cell with the recipe cell
            })
        )
    );

    // If a recipe is found, return the result, otherwise return null
    return recipeFound ? { result: recipeFound.result } : null;
};
