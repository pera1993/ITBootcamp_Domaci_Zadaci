//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5
{ // da ispise svaki clan niza deljiv sa 5 console logom u novom redu
    console.log(`-----1 zadatak, 1 nacin-------`)
    function deljivi5(niz) {
        for (const clan of niz) {
            if (clan % 5 == 0) {
                console.log(clan)
            }
        }
    }
    let x = [2, 5, 7, 10, 13, 15, 19, 20, 21, 25]
    deljivi5(x)
}
{ // da smesti sve deljive u 1 niz pa vrati niz
    console.log(`-----1 zadatak, 2 nacin-------`)
    function deljivi5(niz) {
        let deljivi = []
        niz.forEach(element => { // kako radi ARROW funkcija ako hocu neki uslov unutar?
            if (element % 5 == 0) // sad radi, nije htelo malopre
                deljivi.push(element)
        });
        return deljivi
    }
    let x = [2, 5, 7, 10, 13, 15, 19, 20, 21, 25]
    console.log(deljivi5(x))
}

//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime 
// * Vrsta 
// * Sposobnosti (niz sposobnosti pokemona) 
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

{
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
    // pise da samo ovo treba staviti u niz, pitaj na grupi da li je tako ili treba nesto dodatno da se uradi
    let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]
    // console.log(pokemoni) // samo provera da ispise sve informacije o svakom pokemonu u nizu


    //3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

    function nizSposobnosti(niz) {
        let stringSposobnosti = []
        niz.forEach((element) => {
            for (let i = 0; i < element.sposobnosti.length; i++) {
                stringSposobnosti.push(element.sposobnosti[i])
            }
        })
        return stringSposobnosti
    }
    console.log(nizSposobnosti(pokemoni)) // radi









    ////////////////////////////////////////////ZA PETAK////////////////////////////////////
    //4. Sortirati pokemone po brzini, rastuće.
    console.log(`----------4. Sort po brzini rastuce--------`)
    function sortBrzina(niz) {
        let brzine = []
        for (let i = 0; i < niz.length; i++) {
            brzine.push(niz[i].karakteristike.brzina + ` : ` + niz[i].ime); // hocu da mi ispise ime pokemona pa njegovu brzinu
        }
        brzine.sort() // sort po defaultu sortira u rastucem nizu, morao sam da stavim prvo Brzine u string da bi ih poredio lepo, da ne bude po slovima imena poredjano
        return brzine
    }
    console.log(sortBrzina(pokemoni))


    //5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.

    console.log(`--------5. Pobednik po jacini napada------`)
    function pobednik(niz) {
        let napadi = []
        let jaciNapad = 0
        // let najjaciDoSada = 0  hteo sam da proveravam i koliko ih ima istu jacinu napada pa da ispisem nesto, ali ne znam ako ima vise od 2 sa jednakim napadima
        let pobednik = ``
        for (let i = 0; i < niz.length; i++) {
            napadi.push(niz[i].ime + ` : ` + niz[i].karakteristike.napad)
            if (niz[i].karakteristike.napad > jaciNapad) {
                // najjaciDoSada = i
                jaciNapad = niz[i].karakteristike.napad
                pobednik = `Pobednik je: ` + niz[i].ime
            } // else if (niz[i].karakteristike.napad = jaciNapad) {
            //  pobednik = niz[i].ime + ` i ` + niz[najjaciDoSada].ime + ` su izjednaceni`
            // }


        }
        console.log(napadi)
        return pobednik

    }

    console.log(pobednik(pokemoni))





}