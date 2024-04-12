const heroes = [ 'Batman', 'Superman', 'Aquaman', 'Robin' ]
console.table('heroes')
console.table(heroes)

// metodos "to" : no  mutan  el arreglo original

    // toSorted
        const heroesSorted = heroes.toSorted();
        console.table('heroes.toSorted()')
        console.table(heroesSorted)

    // toReversed
        const heroesReversed = heroesSorted.toReversed();
        console.table('heroesSorted.toReversed()')
        console.table(heroesReversed)

// En estos casos mutan el arreglo original

    // const heroesCopy = heroes;

    // heroesCopy.sort();
    // heroesCopy.reverse();

    // console.table(heroes)
    // console.table(heroesCopy)