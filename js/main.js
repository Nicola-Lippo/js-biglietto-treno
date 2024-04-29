"use strict";

//definisco la variabile KM che deve percorrere
const kmUser = Number(prompt("Inserisci il numero di Km che devi percorrere"));
console.log({kmUser});
//definisco la variabile ETA' dell'utente
const etaUser = parseInt(prompt("Inserisci la tua età"));
console.log({etaUser});

//variabile fissa € al Km
const prezzoKm = 0.21;
//variabille dell' età per scontistica
const minori = 18;
const anziani = 65;
//variabille della % di sconto
const scontoMinori = 20;
const scontoAnziani = 40;
//definisco il prezzo del biglietto
let prezzo = prezzoKm * kmUser
let prezzoScontato = 0

//formule scontistica
if (etaUser < minori) {
    console.log("utente minorenne");
    prezzoScontato = (prezzo / 100 * scontoMinori);
} else if (etaUser > anziani) {
    console.log("utente anziano");
    prezzoScontato = (prezzo / 100 * scontoAnziani);
}
prezzo -= prezzoScontato;

console.log(`Il prezzo finale del biglietto è ${prezzo.toFixed(2)}€`);