/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/
console.log("Hello World");
/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
dataType = "ELENCO DATATYPE";
console.log(dataType);
dataType1 = "STRING";
let description1 = dataType1 + " " + ": è una variabile di tipo scrittura";
console.log(description1);
dataType2 = "NUMBER";
let description2 = dataType2 + " " + ": è una variabile di tipo numerico";
console.log(description2);
dataType3 = "BOOLEAN";
let description3 = dataType3 + " " + ": True / False";
console.log(description3);
dataType4 = "UNDEFINED";
let description4 = dataType4 + " " + ": valore indefinito";
dataType5 = "NULL";
console.log(description4);
let description5 =
  dataType5 + " " + ": valore intenzionalmente e provvisoriamente idefinito ";
console.log(description5);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Giorgia";
console.log(name);
console.log("Giorgia, avendo un valore tra gli apici, risulterà una stringa");
console.log(typeof name + " " + "(questo è un typeof)");
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num1 = 12;
//console.log(num1);//
num2 = 20;
//console.log(num2);//
let somma = num1 + num2;
console.log(somma);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
 
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x = 12;
console.log(x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// RISPOSTA //
/* const name =
  "Ipsaro Passione"; ( Uncaught SyntaxError: Identifier 'name' has already been declared (at D1.js:61:7))
console.log(name);*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num = 4;
let sottrazione = num - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name1 = "john";
//console.log(name1);//
name2 = "John";
//console.log(name2);//
console.log(name1 === name2);

/*name1 = "john";
//console.log(name1);//
name2 = "john";
//console.log(name2);//
console.log(name1 === name2);*/
console.log(name1.toolowerCase === name2.toolowerCase);
