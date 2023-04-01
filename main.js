
//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.
//Consigli del giorno
//1. Scriviamo sempre in italiano i passaggi che vogliamo fare
//2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


//palindroma

function parolainvertita(parola) {

    let lettere = parola.split('');

    lettere.reverse();

    let invertita = lettere.join('');

    return invertita;
};

const button1 = document.getElementById('bottone1');

button1.addEventListener('click', function() {

let parola = document.getElementById('parolainz').value    

if (parola == parolainvertita(parola)) {

    document.getElementById('palindroma').innerHTML = `la prola ${parola} è palindroma`

} else {

    document.getElementById('palindroma').innerHTML = `la prola ${parola} non è palindroma`

}

});

//pari e dispari 

const button = document.getElementById('bottone');

function generanumerorandom(v) {

    let n = Math.floor(Math.random() * v) + 1

    return n

}

button.addEventListener('click', function() { 
    
    const pari = document.querySelector('#pari').checked;
    const dispari = document.querySelector('#dispari').checked;
    let numerouser = parseInt(document.getElementById('numero').value)
    let numeropc = generanumerorandom(5)
    let somma = numerouser + numeropc

    console.log(pari , dispari , numerouser, somma );

    document.getElementById('sceltapc').innerHTML = `il pc ha scelto: ${numeropc} la somma dei vosti numeri è: ${somma}`

    if (pari==true && somma % 2 == 0) {

        document.getElementById('risultato').innerHTML = 'hai vinto la somma è pari'

    } else if (dispari==true && somma % 2 != 0) {

        document.getElementById('risultato').innerHTML = 'hai vinto la somma è dispari'

    } else if (pari==false && somma % 2 == 0) {

        document.getElementById('risultato').innerHTML = 'hai perso la somma è pari'

    } else if (dispari==false && somma % 2 != 0) {

        document.getElementById('risultato').innerHTML = 'hai perso la somma è dispari'

    }    
});




