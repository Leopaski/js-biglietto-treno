let tripdistance = parceInt (prompt('da quanti km è composto il tuo viaggio'?));
const passengerage = parceInt (prompt ('Inserisci la tua età'));
let priceticket = tripdistance*0,21 + 'euro';
let scontojunior = 20*priceticket/100;
let scontosenior = 40*priceticket/100;
const ticket = priceticket;
const ticketjunior = priceticket - scontojunior + 'euro';
const ticketsenior = priceticket - scontosenior +'euro';
if (passengerage<18){
    document.getElementById("costoticket").innerHTML += ticketjunior + 'euro';
} else if (passengerage>65) {
    document.getElementById("costoticket").innerHTML += ticketsenior + 'euro';
} else {
    document.getElementById("costoticket").innerHTML += priceticket + 'euro';
}