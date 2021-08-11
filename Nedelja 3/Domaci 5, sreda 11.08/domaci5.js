// NAJDUZI PALINDROM
//  * 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
// Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
// Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// Ispis: "12345678987654321"
//  */

{
    console.log(`-------PALINDROM-ZADATAK-------`)

    function jePalindrom(rec) {
        rec = rec.toLowerCase()
        let obrnuto = rec.split("").reverse().join("");
        return rec == obrnuto
    }

    function najduziPalindrom(rec) {

        if (typeof rec !== 'string' || rec == ``) return 'promenljiva nije string ili je prazna'

        let maxDuzina = 0
        let najduzi = ``
        for (let i = 0; i < rec.length; i++) {
            let podstring = rec.substr(i, rec.length);

            for (let j = podstring.length; j >= 0; j--) {
                let podpodstring = podstring.substr(0, j)
                if (podpodstring.length <= 1) // jedno slovo nije palindrom
                    continue;

                if (jePalindrom(podpodstring)) {
                    if (podpodstring.length > maxDuzina) {
                        maxDuzina = podpodstring.length
                        najduzi = podpodstring
                    }
                }
            }
        }
        return najduzi
    }

    let z = `Anabanana`
    console.log(najduziPalindrom(z))
    let x = ``
    console.log(najduziPalindrom(x))
    let y = `HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE`
    console.log(najduziPalindrom(y))
    console.log(najduziPalindrom(`a`))

}

/*
 * 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz
 */
{
    console.log(`------1.ZADATAK SUM I PROIZVOD---------`)

    function sumPr(niz) {
        let sum = 0
        let proizvod = 1
        let povrat = []
        for (const broj of niz) {
            sum += broj
            proizvod *= broj
        }

        povrat.push(sum)
        povrat.push(proizvod)

        return povrat
    }

    let x = [0, 3, 4, 1, 1, 1]
    console.log(sumPr(x))
    let y = [1, 2, 3, 4, 5, 6, 7]
    console.log(sumPr(y))

}




/* 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
*/
{
    console.log(`-------2.ZADATAK IZBACUJE NULL,UNDEFINED, NaN, 0, ""-----------`)

    function izbacivac(niz) {
        let x = []
        for (const clan of niz) {
            if (clan) { x.push(clan) }

        }
        niz = x
        return niz
    }

    let provera = [0, 1, , 4, `abc`, ``, ` `, undefined, null, 10]
    console.log(izbacivac(provera))


}






/* 4. За првих 100 бројева исписати:
*       ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
*       Ако је дељив са 3,5,7 - FizzBuzzZazz
*       3,5 - FizzBuzz
*       3,7 - FizzZazz
*       5,7 - BuzzZazz
*/
{
    console.log(`------4.zadatak FizzBuzzZazz-------`)

    for (let i = 1; i <= 105; i++) {
        let string = `` // mora da bude unutra da bi ga resetovao za svako sledece i
        if (i % 3 == 0) string = string + `Fizz`
        if (i % 5 == 0) string = string + `Buzz`
        if (i % 7 == 0) string = string + `Zazz`
        console.log(i + `:` + string)

    }
    console.log(`STAVIO SAM DO 105 da bi ispisao i FizzBuzzZazz`)
}



/* 5. Izvrsiti inverziju brojeva bez pomocne promenljive.
*      Pr: x = 5 y = 9
*      Resenje: x = 9 y = 5
*      pom = "ne mozete koristiti"
*
*/
{
    console.log(`-------5.zadatak INVERZIJA---------`)
    let x = 187;
    let y = 129;

    x = x + y;
    y = x - y;
    x = x - y;

    console.log(x)
    console.log(y)
    console.log(`X je sada ${x} a Y je ${y}`)
}
