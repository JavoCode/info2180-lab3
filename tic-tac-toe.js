
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


window.onload = function (){
    setSquares();
    setSquareContent();
    hoverMouse();
    resetGame();
}




//Applies CSS for the squares(Div)
function setSquares(){
    let board  = document.getElementById('board');
    let squares = board.children;
    for(var i=0; i<squares.length; i++){
        squares[i].setAttribute("class","square");
    }
}


//set Inner Html based on X or 0
function setSquareContent(){
    let board  = document.getElementById('board');
    let squares = board.children;
    let finalArr = ["","","","","","","","",""];
    let player = "O"
    let count = 0;
    for(var i=0; i<squares.length; i++){
        let singleSquare = squares[i];
            singleSquare.addEventListener("click",function (){
                if(player == "O" && (singleSquare.innerHTML != "X" && singleSquare.innerHTML != "O") ){
                    singleSquare.innerHTML = "X";
                    singleSquare.classList.add("X");
                    finalArr[count] = ("X");
                    count++;
                    player = "X"

                    if(count>=5){
                        console.log(squares)
                        let gameState = [];
                        for(let i=0; i<squares.length;i++){

                            gameState.push(squares[i].innerHTML)
                        }
                        handleResultValidation(gameState)
                    }

                    console.log(finalArr);
                }else if(player == "X" && (singleSquare.innerHTML != "X" && singleSquare.innerHTML != "O")){
                    singleSquare.innerHTML = "O";
                    singleSquare.classList.add("O");
                    finalArr[count] = "O"
                    count++;
                    player = "O"
                    if(count>=5){
                        console.log(squares)
                        let gameState = [];
                        for(let i=0; i<squares.length;i++){

                            gameState.push(squares[i].innerHTML)
                        }
                        handleResultValidation(gameState)
                    }


                }
            })

    }
}

function hoverMouse(){
    let board  = document.getElementById('board');
    let squares = board.children;
    for(var i =0; i<squares.length; i++){
        let singleSquare = squares[i];
        singleSquare.addEventListener("mouseenter", function (){
            singleSquare.classList.add("hover");
        });

        singleSquare.addEventListener("mouseleave",function (){
            singleSquare.classList.remove("hover");
        })

    }
}

function handleResultValidation(gameState) {
    let roundWon = false;
    let winner = "";
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            winner = a;
            break
        }
    }
    if (roundWon) {
        let statusDiv = document.getElementById("status");
        statusDiv.innerHTML = winner + " won"
        statusDiv.classList.add("you-won");
    }else if(!gameState.includes("") &&roundWon == false){
        console.log("game drawn");
        let statusDiv = document.getElementById("status");
        statusDiv.innerHTML = "Game Drawn. Click the New Game button to restart";

    }
}

function resetGame(){
    let btn = document.getElementsByClassName("btn")
    btn[0].addEventListener("click",function (){
        let statusDiv = document.getElementById("status");
        statusDiv.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
        let board  = document.getElementById('board');
        let squares = board.children;
        for(let i=0; i<squares.length;i++){
            squares[i].innerHTML = "";
            console.log()
            let lastClass = squares[i].classList[1]
            squares[i].classList.remove(lastClass);
        }
    });





}