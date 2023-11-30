/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1 = 0, l2 = 0) {
    let calcoloarea = l1 * l2
    return calcoloarea
} 
// testo la funzione
console.log(area(3, 7))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (numero1 = 0, numero2 = 0) {
    if(numero1 === numero2) {
        return (numero1 + numero2) * 3
    } else {
        return numero1 + numero2
    }
}
// testo la funzione
console.log(crazySum(7,5))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (numero) {
    let absoluteDifference = Math.abs (numero - 19)
    if (numero > 19) {
        return absoluteDifference * 3
    } else {
        return absoluteDifference
    }
}
// testo la funzione
console.log(crazyDiff(34))
console.log(crazyDiff(1))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
    return (n > 20 && n <= 100) || n === 400 
}

// testo la funzione
console.log(boundary(79))
console.log(boundary(400))
console.log(boundary(593))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string) {
    if (string.startsWith('EPICODE')) {
        return string
    } else {
        return 'EPICODE' + ' ' + string
    }
}
// testo la funzione
console.log(epify('Student'))
console.log(epify('EPICODE Teacher'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
    if (n > 0 && (n % 3 === 0 || n % 7 === 0)) {
        return 'multiplo'
    } else {
        return 'non multiplo'
    }
}
// testo la funzione
console.log(check3and7(11))
console.log(check3and7(11))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string) {
   
    return string.split('').reverse().join('');
}
// testo la funzione
console.log(reverseString("hello"))
console.log(reverseString("Good morning to everyone"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (inputString) {
    let words = inputString.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let resultString = words.join(' ');

    return resultString;
}

// testo la funzione
console.log(upperFirst("hello world"));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (string) {
    if (string.length >= 2) {
       return string.slice(1 ,-1)
    } else {
        return ""
    }
}
// testo la funzione
console.log(cutString('Hello'))
console.log(cutString('Goodbye'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    const randomNumbers = [];
  
    for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * 11); // Genera un numero casuale tra 0 e 10
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }
  
  const result = giveMeRandom(5);
  console.log(result);
