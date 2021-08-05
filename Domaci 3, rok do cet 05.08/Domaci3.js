/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),
izracunati koliko je dana potrebno puzu da se popne na drvo
pomocu WHILE petlje.

Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...

Na kraju treba da se ispise poruka na primer:

Puz se popeo na drvo za 8 dana

Smatrati da drvo svakog dana raste fiksno 1cm. */

let visinaDrveta = 16
let putPuza = 0
const brzinaPuza = 3
let count = 0

while (putPuza < visinaDrveta) {
    if (visinaDrveta - putPuza >= 3) {
        putPuza += 3;
        count++;
        console.log(`Dan ${count}: Puz je presao ${putPuza} cm, visina drveta je: ${visinaDrveta} cm `);
        visinaDrveta++;
    } else {
        putPuza += (visinaDrveta - putPuza);
        count++;
        console.log(`Dan ${count}: Puz je presao ${putPuza} cm, visina drveta je: ${visinaDrveta} cm`)
    }
}
console.log(`Puz se popeo na vrh za ${count} dana`)

console.log(`------------------------------------`)


/* 2. Treba izracunati poptust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:

Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara
*/
// msm da je ovo za SWITCH CASE

//tipovi klijenata: 1. Zaposlen, 2. Student, 3. Penzioner, 4. Firma, Ostali(default)
// SWITCH za dan u nedelji? Onda ima 7 caseva, mogu da se spajaju sa onim :, case 1:case 2:case 3: pa nesto

let klijent = `firma`
const danUnedelji = new Date()
let dan = danUnedelji.getDay()
let iznos = 18000
let popust = 0
let finalRacun
console.log(danUnedelji)


switch (klijent) {
    case `zaposlen`:
        if (iznos >= 5000) {
            popust += iznos * 0.05;
        }
        switch (dan) {
            case 0: case 6:
                popust += (iznos - popust) * 0.05;
                finalRacun = iznos - popust;
                console.log(`Vas iznos je bio ${iznos} din, sa popustom za IZNOS i VIKEND od ${popust} din Vas finalni racun je ${finalRacun} dinara`)
                break;
            default:
                if (popust > 0) {
                    finalRacun = iznos - popust;
                    console.log(`Vas iznos je bio ${iznos} din, imate popust na IZNOS od ${popust} din Vas finalni racun je ${finalRacun} dinara`)
                } else {
                    finalRacun = iznos;
                    console.log(`Vas iznos je bio ${iznos} din, NISTE ostvarili popust tako da je Vas finalni racun ${finalRacun} dinara`)
                }
                break;
        }
        break;

    case `student`:
        if (iznos >= 3000) {
            popust += iznos * 0.2;
        }
        switch (dan) {
            case 0: case 6:
                popust += (iznos - popust) * 0.05;
                finalRacun = iznos - popust;
                console.log(`Vas iznos je bio ${iznos} din, sa popustom za IZNOS i VIKEND od ${popust} din Vas finalni racun je ${finalRacun} dinara`)
                break;
            default:
                if (popust > 0) {
                    finalRacun = iznos - popust;
                    console.log(`Vas iznos je bio ${iznos} din, imate popust na IZNOS od ${popust} din Vas finalni racun je ${finalRacun} dinara`)
                } else {
                    finalRacun = iznos;
                    console.log(`Vas iznos je bio ${iznos} din, NISTE ostvarili popust tako da je Vas finalni racun ${finalRacun} dinara`)
                }
                break;
        }
        break;

    case `penzioner`:
        if (iznos >= 2000) {
            popust += iznos * 0.3;
        }
        switch (dan) {
            case 0: case 6:
                popust += (iznos - popust) * 0.05;
                finalRacun = iznos - popust;
                console.log(`Vas iznos je bio ${iznos} din, sa popustom za IZNOS i VIKEND od ${popust} din Vas finalni racun je ${finalRacun} dinara`)
                break;
            default:
                if (popust > 0) {
                    finalRacun = iznos - popust;
                    console.log(`Vas iznos je bio ${iznos} din, imate popust na IZNOS od ${popust} din Vas finalni racun je ${finalRacun} dinara`)
                } else {
                    finalRacun = iznos;
                    console.log(`Vas iznos je bio ${iznos} din, NISTE ostvarili popust tako da je Vas finalni racun ${finalRacun} dinara`)
                }
                break;
        }
        break;

    case `firma`:
        if (iznos >= 10000) {
            popust += iznos * 0.1;
        }
        switch (dan) {
            case 0: case 6:
                popust += (iznos - popust) * 0.05;
                finalRacun = iznos - popust;
                console.log(`Vas iznos je bio ${iznos} din, sa popustom za IZNOS i VIKEND od ${popust} din Vas finalni racun je ${finalRacun} dinara`)
                break;
            default:
                if (popust > 0) {
                    finalRacun = iznos - popust;
                    console.log(`Vas iznos je bio ${iznos} din, imate popust na IZNOS od ${popust} din Vas finalni racun je ${finalRacun} dinara`)
                } else {
                    finalRacun = iznos;
                    console.log(`Vas iznos je bio ${iznos} din, NISTE ostvarili popust tako da je Vas finalni racun ${finalRacun} dinara`)
                }
                break;
        }
        break;

    default:
        if ((dan == 0) || (dan == 6)) {
            popust += (iznos - popust) * 0.05;
            finalRacun = iznos - popust;
            console.log(`Vas iznos je bio ${iznos} din, sa popustom za IZNOS i VIKEND od ${popust} din Vas finalni racun je ${finalRacun} dinara`)
        }
        else {
            finalRacun = iznos;
            console.log(`Vas iznos je bio ${iznos} din, NISTE ostvarili popust tako da je Vas finalni racun ${finalRacun} dinara`)
        }

        break;
}
