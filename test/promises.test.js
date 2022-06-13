const examplePromise = require('../promises')

jest.useFakeTimers();

describe("Testing promises...", () => {
    test("1. Verifying if the content of the json file is accessible", () => {
        const readJsonFile = require('fs').readFileSync('src/data/recipes.json');
        const data = JSON.parse(readJsonFile);
        
        expect(data).not.toBeUndefined();
        expect(data.length).toBe(3);
    })
});