type Recipe = {
    name: string;
    pattern: (string | null)[][];
    result: { result: string; quantity: number }; // Aligning with checkRecipe's return type
    flexiblePlacement?: boolean;
};

  // Example recipes
const recipes: Recipe[] = [
    {
        name: "wooden_plank",
        pattern: [
            ["log", null, null],
            [null, null, null],
            [null, null, null],
        ],
        result: { result: "wooden_plank", quantity: 4 },
        flexiblePlacement: true,
    },
    {
        name: "stick",
        pattern: [
            [null, null, null],
            ["plank", null, null],
            ["plank", null, null],
        ],
        result: { result: "stick", quantity: 4 },
    },
];

export const checkRecipe = (grid: string[][]): { result: string; quantity: number } | null => {
    for (const recipe of recipes) {
        if (
            recipe.flexiblePlacement
                ? matchesRecipeFlexible(grid, recipe.pattern)
                : matchesRecipe(grid, recipe.pattern)
            ) {
                return recipe.result;
        }
    }
    return null;
};

const matchesRecipe = (grid: string[][], pattern: (string | null)[][]): boolean => {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (grid[row][col] !== pattern[row][col]) {
                return false;
            }
        }
    }
    return true;
};

const matchesRecipeFlexible = (grid: string[][], pattern: (string | null)[][]): boolean => {
    const requiredItems: string[] = [];
    const gridItems: string[] = [];

    for (const row of pattern) {
        for (const cell of row) {
            if (cell) requiredItems.push(cell);
        }
    }

    for (const row of grid) {
        for (const cell of row) {
            if (cell) gridItems.push(cell);
        }
    }

for (const item of requiredItems) {
    const index = gridItems.indexOf(item);
        if (index === -1) return false; 
        gridItems.splice(index, 1);
    }

    return true; 
};
