// seleziona difficoltà e crea riquadri in base alla difficoltà scelta
function setDifficult() {

    //resetta il numero dei riquadri
    let totalSquares = 0;

    //10 x 10 hard
    if (difficultySelect.value === "hard") {
        totalSquares = 100;

        //9 x 9 normal
    } else if (difficultySelect.value === "medium") {
        totalSquares = 81;
        gridElement.class

        //7 x 7 easy
    } else if (difficultySelect.value === "easy") {
        totalSquares = 49;
    }
    gridElement.className = difficultySelect.value;
    return totalSquares;
}


//funzione che mi crea le 16 bombe casuali
function createBombs(maxBombs) {

    //creo l'array vuoto dove andrò a pushare i numeri random
    let bombPositions = [];
    //numero di bombe che ci devono essere
    const bombsNumber = 16;


    //ciclo che mi crea numeri random finchè non raggiunge il numero di bombsNumber
    while (bombPositions.length < bombsNumber) {
        const randomNumber = Math.floor(Math.random() * maxBombs) + 1;

        //push nell'array vuoto
        if (!bombPositions.includes(randomNumber)) {
            bombPositions.push(randomNumber);
        }
    }
    return bombPositions;
}


//booleano che determina la fine della partita impostato su false
let gameEnded = false;


//creo i riquadri e li inserisco nella griglia
function createGrid(totalSquares, bombPositions) {


    //creo n div
    for (let i = 0; i < totalSquares; i++) {
        let newElement = document.createElement("div");
        newElement.classList.add("square");


        //stampo il numero e lo incremento di + 1
        newElement.innerText = i + 1;


        //li inserisco nella griglia
        gridElement.append(newElement);


        //al click, i riquadri si colorano
        newElement.addEventListener('click',
            function () {


                if (!gameEnded) {

                    // Controlla se il numero del riquadro è presente nella lista delle posizioni delle bombe
                    if (bombPositions.includes(parseInt(this.innerText))) {

                        // Se c'è la bomba, il colore della casella diventa rosso
                        this.classList.add("bomb");
                        console.log("Hai calpestato una bomba! Partita terminata.");

                        //fine partita (l'utente non può cliccare)
                        gameEnded = true;

                    } else {
                        // Se non c'è la bomba, il colore del riquadro diventa azzurro
                        this.classList.add("safe");
                    }
                }
            }
        )
    }
}



const buttonElementGrid = document.getElementById("start");
const difficultySelect = document.getElementById("difficulty");
const gridElement = document.querySelector("#grid");


buttonElementGrid.addEventListener('click',
    function () {

        const totalSquares = setDifficult();

        //setto il numero massimo che possono avere le bombe in base alla difficoltà
        let maxBombs;

        if (difficultySelect.value === "hard") {
            maxBombs = 100;
        } else if (difficultySelect.value === "medium") {
            maxBombs = 81;
        } else if (difficultySelect.value === "easy") {
            maxBombs = 49;
        }

        let bombPositions = createBombs(maxBombs);


        // Resetta la griglia
        gridElement.innerHTML = '';

        // Genera le caselle della griglia
        createGrid(totalSquares, bombPositions);

        console.log("Bomb Positions:", bombPositions);
    }
)

//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati -
//abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro
//e l'utente può continuare a cliccare sulle altre celle.
