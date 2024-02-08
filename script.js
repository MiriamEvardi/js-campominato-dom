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


//creo i riquadri e li inserisco nella griglia
function createGrid(totalSquares) {


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
                this.classList.add("active");

                console.log(this.innerText);
            }
        )
    }
}



//funzione che mi crea le 16 bombe casuali
function createBombs(maxBombs) {

    //numero di bombe che ci devono essere
    const bombsNumber = 16;

    //creo l'array vuoto dove andrò a pushare i numeri random
    let bombPositions = [];

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
        createGrid(totalSquares);

        console.log("Bomb Positions:", bombPositions);
    }
)


//Il computer deve generare 16 numeri casuali e inserirli in un array,
// in base al range della difficoltà prescelta
//(se abbiamo scelto facile l'array conterrà numeri casuali da 1 a 100, se invece abbiamo scelto difficile l'array dovrà contenerne da 1 a 49):
//questi rappreseranno le posizioni delle nostre bombe.
//Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

