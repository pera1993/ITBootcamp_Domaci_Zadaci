/**--------------------
Nacrtati dijamant kao na primeru:

     *
    ***
   *****
  *******
 *********
  *******
   *****
    ***
     *


 ---------------------*/


// DA BUDE ISTO KAO NA SLICI I SAMO TAKO

{

    let red = ``
    let zvezda = `*`
    let prazno = ` `
    for (let i = 1; i <= 9; i += 2) {
        red = prazno.repeat((9 - i) / 2) + zvezda.repeat(i) + prazno.repeat((9 - i) / 2);
        console.log(red);
    }
    for (j = 7; j > 0; j -= 2) {
        red = prazno.repeat((9 - j) / 2) + zvezda.repeat(j) + prazno.repeat((9 - j) / 2);
        console.log(red);
    }
}

// DA NAPRAVI DIJAMANT ZA BILO KOJE NEPARNO N
{
    let N = 16

    if (N % 2 == 0) {
        N = N - 1      // da bi bio neparan broj, onda je dijamant pravilan
    }

    let red = ``
    let zvezda = `*`
    let prazno = ` `
    for (let i = 1; i <= N; i += 2) {
        red = prazno.repeat((N - i) / 2) + zvezda.repeat(i) + prazno.repeat((N - i) / 2);
        console.log(red);
    }
    for (j = N - 2; j > 0; j -= 2) {
        red = prazno.repeat((N - j) / 2) + zvezda.repeat(j) + prazno.repeat((N - j) / 2);
        console.log(red);
    }
}