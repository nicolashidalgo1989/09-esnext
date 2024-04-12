const state = [
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

const index = 1;
const newName = 'Green Lantern';

// with genera  un  nuevo state y poder modificarlo
const newState = state.with(index, {
    ...state.at(index), // at incluye el index
    name: newName
})

console.table(state);
console.table(newState);

console.log('El ultimo heroes: ', state[state.length -1 ]) // version larga
// con at() se puede apuntar al indice especifico, y en negativo para ir a la inversa
console.log('El ultimo heroes: ', state.at(-1))



// esto funciona pero es mucho codigo para un cambio minimo
/*
console.table( 'state original-> ', state )
setTimeout( () => {
    state[0].name = 'Black Panther';
    const newState = state.map( (hero, i) => {
        if(index === i){
            hero.name = newName;
        }
        return {...hero}; // con spread rompe  la referencia
    })
    console.table( 'state original-> ', state )
    console.table( 'state original-> ', newState )
}, 5000)
*/