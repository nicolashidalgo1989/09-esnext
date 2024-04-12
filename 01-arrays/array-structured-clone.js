const superheroes = [
    // 'Nicolas',
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Iron Man'
    },
];

// se recomienda usar spread operator ... para duplicar , solo si el arreglo contiene datos primitivos
// const superHeroesCopy = [ ...superheroes ];
// superHeroesCopy[1].name = 'Green Latern'; // modifica ambos arreglos, ya que los objetos pasan por referencia
// superHeroesCopy[0] = 'Aquaman'; // modifica el arreglo copiado solamente al ser primitivo

// comunmente se utilizan funcions JSON para realizar la clonacion,pero  se pueden perder referencias
// const superHeroesCopy = JSON.parse( JSON.stringify(superheroes));

// es mas  recomendable usar structureClone
const superHeroesCopy = structuredClone(superheroes);
superHeroesCopy[1].name = 'Green Latern'; // modifica solo el arreglo clonado

console.table(superheroes)
console.table(superHeroesCopy)