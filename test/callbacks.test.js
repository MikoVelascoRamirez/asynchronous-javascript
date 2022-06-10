const exampleCallback = require('../callbacks')

const diary = [
    {id: 1, name:"Keyla", description: "She's Keyla"},
    {id: 2, name:"Hugo", description: "He's Hugo"},
    {id: 3, name:"Solovino", description: "He's the beautiful Solovino 🐶"}
];

jest.useFakeTimers();

describe("Testing callbacks...", () => {
    test("1. Checking if an item was inserted on the list", () => {

        function callback(){
            console.log("Ejecutando callback...");
            expect(diary.length).toBe(4);
        }

        exampleCallback.addPerson({id: 4, name:"post 4", description: "desc of post 4"}, diary, callback);

        jest.advanceTimersByTime(2000);
    });
});