let tripdistance = parseInt(prompt('da quanti km è composto il tuo viaggio'))
const passengerage = parseInt(prompt('Inserisci la tua età'))
let priceticket = tripdistance*0.21 
let scontojunior = 20*priceticket/100
let scontosenior = 40*priceticket/100
const ticket = priceticket;
const ticketjunior = (priceticket - scontojunior).toFixed(2);
const ticketsenior = (priceticket - scontosenior).toFixed(2);
if (passengerage<18){
    document.getElementById("costoticket").innerHTML += ticketjunior + 'euro';
} else if (passengerage>65) {
    document.getElementById("costoticket").innerHTML += ticketsenior + 'euro';
} else {
    document.getElementById("costoticket").innerHTML += priceticket + 'euro';
}