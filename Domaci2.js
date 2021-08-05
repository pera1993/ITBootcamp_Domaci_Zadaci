
// Novi zadaci 

// Data su 4 stringa. 

//1. Proveriti koji je string najduzi i ispisati samo njega
let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";
let max;
if (string1.length >= string2.length) {
    max = string1;
}
else if (string3.length >= string2.length) {
    max = string3;
}
else if (string2.length >= string4.length) {
    max = string2;
}
else {
    max = string4;
}

console.log(max);


/* Provera da li ovo radi u konzoli

let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
if ((string1.length) >= (string2.length)) {
    max = string1;
else {
    max = string2;
}
console.log(max)

NE ZNAM ZASTO MI IZBACUJE GRESKU U KONZOLI KADA JE ISPRAVNO, DRUGIMA RADI I ISPISE DUZI STRING*/


//2. Ispisati najkraci string koji sadrzi rec "string"
let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";
let x, y, z, w;
if (string1.includes(`string`)) {
    x = string1.length;
}
else {
    x = 0;
}

if (string2.includes(`string`)) {
    y = string2.length;
}
else {
    y = 0;
}

if (string3.includes(`string`)) {
    z = string3.length;
}
else {
    z = 0;
}

if (string4.includes(`string`)) {
    w = string1.length;
}
else {
    w = 0;
}

if (x > 0 && y > 0 && x <= y) {
    min = string1;
}
else if (y > 0 && z > 0 && y <= z) {
    min = string2;
}
else if (z > 0 && w > 0 && z < w) {
    min = string3;
}
else if (w > 0) {
    min = string4;
}
else {
    console.log(`Nijedna varijabla ne sadrzi rec string`)
}
console.log(min)

//3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove izostaviti
let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";
let FinalniString;
let x, y, z, w;
x = string1.replace(`neki `, ``);
y = string2.replace(`neki `, ``);
z = string3.replace(`neki `, ``);
w = string4.replace(`neki `, ``);
if (x.includes(`string koji je`)) {
    x = ``;
}
if (y.includes(`string koji je`)) {
    y = ``;
}
if (z.includes(`string koji je`)) {
    z = ``;
}
if (w.includes(`string koji je`)) {
    w = ``;
}
FinalniString = x + `` + y + `` + z + `` + w;
console.log(FinalniString)
//SA CASA ZADACI

//1. Na osnovu kolicine i cene artikla ispisati ukupnu cenu
//Kolicina je zadata u gramima
//cena je zadata po kilogramu
let kol = 700;
const cena = 1000;
let Ukupno
if (kol > 0) {
    Ukupno = (kol / 1000) * cena;
    console.log(`Vasa cena je ${Ukupno} dinara`);
}
else {
    console.log(`Molimo Vas odaberite vise grama`)
}
console.log(Ukupno);

//2. Dopuniti 4. zadatak sa casa kolicinom novca, i ispisati racun (ako nema dovoljno novca ispisati poruku)
let kol = 700;
const cena = 1000;
let novcanik = 1300;
let Ukupno = (kol / 1000) * cena;
if ((kol > 0) && (novcanik >= Ukupno)) {

    console.log(`Vasa cena je ${Ukupno} dinara`);
}
else if ((kol > 0) && (novcanik < Ukupno)) {
    console.log(`Nemate dovoljno novca`)
}
else {
    console.log(`Molimo Vas odaberite vise grama`)
}