// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// RACCOLTA DATI
const nkm = prompt(`Quanti chilometri vuoi percorrere?`);
console.log(nkm);
const usereta = prompt(`Digita la tua età`);
console.log(usereta);

// LOGICA 
let price = nkm * 0.21;
console.log(price.toFixed(2) );

// CALCOLO SCONTI
if( usereta < 18 ) {
    let discount = (price * 20) / 100;
    console.log(discount);
    price = (price - discount);
    console.log(price)
} else if ( usereta > 65 ) {
    let discount = (price * 40) / 100;
    console.log(discount);
    price = (price - discount);
    console.log(price)
}

// OUTPUT
let userMessage = `il prezzo del biglietto è di ` + price.toFixed(2)
alert(userMessage);