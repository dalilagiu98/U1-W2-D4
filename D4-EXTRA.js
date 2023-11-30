// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
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

const result = giveMeRandom(10);
console.log("il risultato dell' array è ", result);

const checkArray = function (randomArray) {
  let sumGreaterThan5 = 0;
  for (let i = 0; i < randomArray.length; i++) {
    const currentNumber = randomArray[i];
    if (currentNumber > 5) {
      console.log("il valore è maggiore di 5");
      sumGreaterThan5 += currentNumber;
    } else {
      console.log("valore minore o uguale a 5");
    }
  }
  console.log("la somma dei valori maggiori di 5 è ", sumGreaterThan5);
};

checkArray(result);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  { id: 1, name: "prodotto1", price: 10, quantity: 1 },
  { id: 2, name: "prodotto2", price: 10, quantity: 1 },
  { id: 3, name: "prodotto3", price: 10, quantity: 2 },
];

const shoppingCartTotal = function (cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    let productTotal = total + product.price * product.quantity;
    total = productTotal;
  }
  return total;
};

console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(cart) {
  if (cart.length === 0) {
    // Gestione del caso in cui il carrello è vuoto
    console.log("Il carrello è vuoto.");
    return null;
  }

  // Inizializza l'oggetto più costoso con il primo elemento del carrello
  let maxProduct = cart[0];

  // Itera attraverso gli altri elementi per trovare il più costoso
  for (let i = 1; i < cart.length; i++) {
    if (cart[i].price > maxProduct.price) {
      maxProduct = cart[i];
    }
  }

  // Ritorna l'oggetto più costoso
  return maxProduct;
}

// Esempio di utilizzo della funzione
const mostExpensiveProduct = maxShoppingCart(shoppingCart);

if (mostExpensiveProduct !== null) {
  console.log("Il prodotto più costoso è:", mostExpensiveProduct);
} else {
  console.log("Nessun prodotto nel carrello.");
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
