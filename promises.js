const fileModule = require('fs');
const data = JSON.parse(fileModule.readFileSync('src/data/recipes.json'));

function addRecipe(recipe, srcData){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const recipes = srcData;            
            recipes.push(recipe);
            fileModule.writeFileSync('src/data/recipes.json', JSON.stringify(recipes, null, 4))
            
            const wasPushed = srcData.some(eachRecipe => eachRecipe.name === recipe.name);
            
            if(wasPushed) resolve(getData(srcData))
            else reject(err)
        }, 2000)
    })
}

function getData(src){
    return src.map( recipe => {
        const {name, ingredients} = recipe;
        return { name, numOfIngredients : ingredients.length }
    })
}

const exporting = {
    addRecipe,
    getData
}

module.exports = exporting;