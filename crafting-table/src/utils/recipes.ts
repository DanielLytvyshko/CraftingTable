export const recipes = [

    //  STICK
    {
        patterns: [
            [
                ["wooden_plank", null, null],
                ["wooden_plank", null, null],
                [null, null, null],
            ],
            [
                [null, null, null],
                ["wooden_plank", null, null],
                ["wooden_plank", null, null],
            ],
            [
                [null, "wooden_plank", null],
                [null, "wooden_plank", null],
                [null, null, null],
            ],
            [
                [null, null, null],
                [null, "wooden_plank", null],
                [null, "wooden_plank", null],
            ],
            [
                [null, null, "wooden_plank"],
                [null, null, "wooden_plank"],
                [null, null, null],
            ],
            [
                [null, null, null],
                [null, null, "wooden_plank"],
                [null, null, "wooden_plank"],
            ]
        ],
        result: "stick",
    },

    // WOODEN PLANK
    {
        patterns: [
            [
                ["oak_log", null, null],
                [null, null, null],
                [null, null, null],
            ],
            [
                [null, null, null],
                ["oak_log", null, null],
                [null, null, null],
            ],
            [
                [null, null, null],
                [null, null, null],
                ["oak_log", null, null],
            ],
            [
                [null, "oak_log", null],
                [null, null, null],
                [null, null, null],
            ],
            [
                [null, null, null,],
                [null, "oak_log", null],
                [null, null, null],
            ],
            [
                [null, null, null],
                [null, null, null,],
                [null, "oak_log", null],
            ],
            [
                [null, null, "oak_log"],
                [null, null, null],
                [null, null, null],
            ],
            [
                [null, null, null],
                [null, null, "oak_log"],
                [null, null, null],
            ],
            [
                [null, null, null],
                [null, null, null],
                [null, null, "oak_log"]
            ]
        ],
        result: "wooden_plank",
    },

    // STONE PICKAXE
    {
        patterns: [
            [
                ["stone", "stone", "stone"],
                [null, "stick", null],
                [null, "stick", null],
            ]
        ],
        result: "stone_pickaxe",
    },
    {
        patterns: [
            [
                [null, "stone", null],
                [null, "stone", null],
                [null, "stick", null]
            ],
            [
                ["stone", null, null],
                ["stone", null, null],
                ["stick", null, null],
            ],
            [
                [null, null, "stone"],
                [null, null, "stone"],
                [null, null, "stick"]
            ]
        ],
        result: "stone_sword"
    }
];
