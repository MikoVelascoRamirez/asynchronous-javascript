const fileModule = require('fs');
const data = JSON.parse(fileModule.readFileSync('src/data/recipes.json'));

function addRecipe(recipe, srcData){
    return new Promise( (reject, resolve) => {
        setTimeout(() => {
            const recipes = srcData;
            recipes.push(recipe);
            fileModule.writeFileSync('src/data/recipes.json', JSON.stringify(recipes, null, 4), err => {
                if(err) reject(err)
                else resolve(data);
            })
        }, 2000)
    })
}

module.exports = addRecipe;