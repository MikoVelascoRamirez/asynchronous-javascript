const recipe = require('../promises')

jest.useFakeTimers();

describe("Testing promises...", () => {
    test("1. Verifying if the content of the json file is accessible", () => {
        const readJsonFile = require('fs').readFileSync('src/data/recipes.json');
        const data = JSON.parse(readJsonFile);
        
        expect(data).not.toBeUndefined();
        expect(data.length).toBeGreaterThan(0);        
    })

    test("2. Verifying if an item was pushed on json file", () => {

        const recipes = [
            {name: "french potatoes", ingredients: ["potato", "garlic", "salt"]},
            {name: "breaded eggplants", ingredients: ["eggplants", "bread crumbs"]}
        ]
        
        const newRecipe = {
            "name" : "hamburguer",
            "ingredients": [
                { name : "pan", cantidad : 2, medida: "piezas" },
                { name : "carne", cantidad : 200, medida: "gramos" },
                { name : "tomate", cantidad : 2, medida: "rodajas" },
                { name : "queso amarillo", cantidad : 1, medida: "rebanada" },
                { name : "pepinillos", cantidad : 3, medida: "rodajas" }
            ]
        }

        expect.assertions(1);
        recipe.addRecipe(newRecipe, recipes)
            .then(data => expect(data).toHaveLength(3));
            
        jest.advanceTimersByTime(3000);
    });
});