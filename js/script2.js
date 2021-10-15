/*Crea due array che hanno un numero di elementi diversi.
 Aggiungi elementi all’array che ha meno elementi
 fino a quando ne avrà tanti quanti l’altro.*/


const array1 = [15, 2, 7];
const array2 = [5];

let i = 0

//Creo un ciclo dove gl'elementi avrano la stessa lunghezza

while (array2.length < array1.length) {

    console.log(array2[i])
    console.log("array2 prima del push: ", array2)
    //Aggiungo il mio array 
    array2.push(array1[i])

    console.log("array2 dopo il push: ", array2)


    i++
}