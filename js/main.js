"use strict";

//definisco la variabile KM che deve percorrere 
const km = prompt("Quanti km devi percorrere");

//definisco la variabile ETA' dell'utente
const eta = prompt("inserisci la tua età");

//calcolo il prezzo del biglietto
console.log (km * 0.21)
const prezzo = (km * 0.21)

//calcolo sconto per minorenni
 if (eta < 18) {
    const importo = ((prezzo * 20) / 100)
    console.log (prezzo - importo)
}
//calcolo sconto per anziani
else if (eta > 65) {
    const importo = ((prezzo * 40) / 100)
    console.log (prezzo - importo)
}



console.log ("sono collegato")