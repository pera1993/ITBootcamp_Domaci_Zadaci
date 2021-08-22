/**
 *
 * 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.
 * 
 * 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.
 *
 * 3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.
 */

//1. napravio u div.tabela tabelu samo sa prvim redom od th elementa

let tabela = document.querySelector(`table`)
let btnDodaj = document.querySelector(`#dodajRed`)
let i = 1
btnDodaj.addEventListener(`click`, () => {
    let noviRed = document.createElement(`tr`) //kreira novi red
    noviRed.style.border = `1px solid black` // OVO SAM STAVLJAO OVAKO BEZVEZE U HTML ELEMENTE STAJL KAO DA NE BIH PRAVIO NOVI CSS FAJL, RADI ALI JE BEZVEZE

    for (let j = 1; j <= 3; j++) {
        let noviTD = document.createElement(`td`) // kreira u okviru novog reda 3 nova td
        if (j == 1) { noviTD.textContent = `${i}` } // ako je j = 1 tj ako je prvi td onda mu daje text i (broj reda), posle treba i da se povecava
        noviTD.style.border = `1px solid black`
        noviRed.append(noviTD)
    }
    i++ // da sledeci broj reda bude povecan
    tabela.append(noviRed)
})
// a da probam da dodam i Obrisi red

// 3. da dodam cekbox, napravio sam u html prvo label i input

let checkBox = document.querySelector(`#check`)

let inputBroj1 = document.querySelector(`#broj1`)
let inputBroj2 = document.querySelector(`#broj2`)
let btnRezultat = document.querySelector(`#rezultat`)
let pZbir = document.querySelector(`#zbir`)

btnRezultat.addEventListener(`click`, () => {
    if (!isNaN(inputBroj1.value) && !isNaN(inputBroj2.value)) {
        let zbir = parseInt(inputBroj1.value) + parseInt(inputBroj2.value)
        pZbir.textContent = `Zbir je ${zbir}`
    } else {
        console.error(`Morate uneti brojeve`)
    }

})

let divObrisi = document.querySelector(`.brisanje`)

checkBox.addEventListener(`change`, () => {
    //console.log(event.target)
    if (checkBox.checked) {
        // divObrisi.fadeIn(2)
        //console.log(`checkbox is checked`)
        //divObrisi.classList.add(`brisanje`)
        divObrisi.classList.remove(`brisanje`) // klasu sam dodao u html direktno, da ne bi bilo 3 fajla

    } else {
        // divObrisi.fadeOut(2)
        //console.log(`checkbox is not checked`)
        divObrisi.classList.add(`brisanje`)
        //divObrisi.classList.remove(`brisanje`)
    }
})
