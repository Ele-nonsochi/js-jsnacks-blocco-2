/*Inserisci un numero, se è pari stampa il numero,
 se è dispari stampa il numero successivo.
 Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
 Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.*/

//Creo la variabile del numero 

const numero = Math.cell(Math.random() * 100)
console.log(numero)

if (numero % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}


