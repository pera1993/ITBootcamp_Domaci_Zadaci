//nadovezivanje na 3 zadatak sa predhodnog domaceg
//1. Napraviti html strukturu da se na pocetku vide 2 button-a. Kada se klikne na oba (naravno ponaosob), 
//trebaju se izlistati svi pokemoni iz niza u svom dugmetu. Na klik jednog dugmeta, trebaju se izlistati
//sve informacije o tom pokemonu.


console.log(`--------3. zadatak-----------`)
let pokemon1 = {
    ime: `Bulbasaur`,
    vrsta: `grass, poison`,
    sposobnosti: [`overgrow`, `chlorophyl`],
    karakteristike: { napad: 3, odbrana: 3, brzina: 3 }
}
let pokemon2 = {
    ime: `Charizard`,
    vrsta: `fire`,
    sposobnosti: [`blaze`, `solar power`],
    karakteristike: { napad: 5, odbrana: 5, brzina: 6 }
}
let pokemon3 = {
    ime: `Psyduck`,
    vrsta: `water`,
    sposobnosti: [`damp`, `cloud nine`, `swift swim`],
    karakteristike: { napad: 4, odbrana: 3, brzina: 4 }
}
let pokemon4 = {
    ime: `Machop`,
    vrsta: `fighting`,
    sposobnosti: [`guts`, `no guard`, `steadfast`],
    karakteristike: { napad: 5, odbrana: 3, brzina: 3 }
}

let pokemoniSvi = [pokemon1, pokemon2, pokemon3, pokemon4]

let btnIgrac = document.querySelector(`button.igrac`) // radi ovako, element.klasa izabrao mi button sa klasom igrac
let btnProtivnik = document.querySelector(`button.protivnik`)
let parPokIgrac = document.querySelector(`p.igracev-pokemon`) // radi isto
let parPokProtivnik = document.querySelector(`p.protivnikov-pokemon`)

let divIgrac = document.querySelector(`div.igrac`)
let divProtivnik = document.querySelector(`div.protivnik`)

let igrac1OdabraniPokemon
let igrac2OdabraniPokemon

let rezultat = document.createElement(`div`)
document.body.append(rezultat)
rezultat.textContent = `REZULTAT`

let btnReset = document.createElement(`button`)
btnReset.textContent = `IGRAJ PONOVO`
document.body.append(btnReset)
btnReset.addEventListener(`click`, () => {
    rezultat.remove()
    location.reload()
})
//funkcija da mi izlista pokemone koju cu pozvati posle na klik dugmeta za EventListener
function izlistajPokemone(divLista, parag, igrac) {

    for (let i = 0; i < pokemoniSvi.length; i++) { // moglo je i pokemons.foreach
        let btnPokemon = document.createElement(`button`)
        btnPokemon.classList.add(`pokemon${i + 1}`)
        btnPokemon.textContent = `Pokemon ${i + 1}`
        divLista.append(btnPokemon)
        btnPokemon.addEventListener(`click`, () => {
            izlistajKarakteristikeIzabranog(pokemoniSvi[i], parag, igrac)
            btnPokemon.disabled = true
        })
    }

    // Object.keys(objekat koji hocu) => ispise niz njegovih kljuceva(property)
}
function izlistajKarakteristikeIzabranog(pokemon, paragraf, igrac) {
    paragraf.textContent = "" //da obrise Karakteristike
    let stringKarakteristika = `<p>${pokemon.ime}, ${pokemon.vrsta} <br> sposobnosti: ${pokemon.sposobnosti} <br> napad: ${pokemon.karakteristike.napad},
    <br>odbrana: ${pokemon.karakteristike.odbrana}, <br>brzina: ${pokemon.karakteristike.brzina}</p>`
    // pokemon.karakteristike.forEach(element => {
    //     stringKarakteristika += element + `, `
    // });
    paragraf.innerHTML = stringKarakteristika



    if (igrac === 1) {
        igrac1OdabraniPokemon = pokemon.karakteristike.napad
    }

    if (igrac === 2) {
        igrac2OdabraniPokemon = pokemon.karakteristike.napad
    }

    if (igrac1OdabraniPokemon && igrac2OdabraniPokemon) {
        if (igrac1OdabraniPokemon > igrac2OdabraniPokemon) {
            rezultat.textContent = `POBEDNIK JE IGRAC`
        } else if (igrac2OdabraniPokemon > igrac1OdabraniPokemon) {
            rezultat.textContent = `POBEDNIK JE RACUNAR/PROTIVNIK`
        } else {
            rezultat.textContent = `NERESENO`
        }
    }



}


btnIgrac.addEventListener(`click`, () => {
    izlistajPokemone(divIgrac, parPokIgrac, 1)
    btnIgrac.disabled = true
})
btnProtivnik.addEventListener(`click`, () => {
    izlistajPokemone(divProtivnik, parPokProtivnik, 2)
    btnProtivnik.disabled = true
})


// // DANILOVO RESENJEl
// let leftContainer = document.querySelector(`.left - container`)
// let leftMainButton = document.querySelector(`.left - container.main - button`)
// //... poslace kod

// //nastavak
// function izlistajPokemone(button, pokemons, list, review, deletingButton) { // izaberi Pokemona dugme, lista pokemona drugi parametar
//     button.addEventListener(`click`, () => {
//         deletingButton.textContent = ""
//         pokemons.forEach(pokemon => {
//             listButton.document.createElement(`button`) // da kreira button za svakog pokemona
//             listButton.textContent = pokemon.name
//             list.append(listButton)
//             listButton.addEventListener(`click`, (event) => {
//                 review.textContent = "" // da isprazni
//                 review.textContent = pokemon.name
//                 review.textContent = pokemon.species
//                 pokemon.karakteristike.atack // da ispise broj za napad

//             })
//         })
//     })
// }
// izlistajPokemone(leftMainButton, pokemoni, leftListDiv, leftReviewDiv, first) // first i second su ovi Deleting button da bi se obrisali
// izlistajPokemone(rightMainButton, pokemoni, rightListDiv, righttReviewDiv, second)