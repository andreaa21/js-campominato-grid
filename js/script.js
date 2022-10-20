/* 
    **Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/ 

const container = document.querySelector('.c-container');
let elemsPerRow; 


document.getElementById('button').addEventListener('click', function(){
    elemsPerRow = 10; //cambierà per il bonus
    container.innerHTML = '';
    // console.log(elemsPerRow);
    start (elemsPerRow);
})


function start (num){
    // creo una variabile con il numero totale di square
    const totalSquares = Math.pow(elemsPerRow, 2);
    console.log(totalSquares);
    // creo square fintanto che i è minore del numero totale di square
    for (let i = 0; i < totalSquares; i++) {
        createSquare(i + 1);
    }
}

function createSquare (squareId){
    //creo il div square
    const square = document.createElement('div');
    // gli aggiungo la classe square
    square.className = 'square';
    // gli scrivo dentro il numero
    square.innerHTML = squareId;
    // gli aggiungo l' evento quando ci clicco sopra
    square.addEventListener('click', clickSquare)
    // lo appendo al container
    container.append(square);
}

function clickSquare (event){
    this.classList.add('color');
    console.log(this.innerHTML);
}



