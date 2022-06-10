const diary = [
    {id: 1, name:"Keyla", description: "She's Keyla"},
    {id: 2, name:"Hugo", description: "He's Hugo"},
    {id: 3, name:"Solovino", description: "He's the beautiful Solovino 🐶"}
];

function addPerson(person, source, callback){
    console.log("Ejecutando función");
    setTimeout(() => {
        console.log("Entrando al timer")
        source.push(person);
        if(callback) callback();
    }, 2000)

    console.log("La función terminó de ejecutarse")
}

const exporting = {
    addPerson
}

module.exports = exporting;