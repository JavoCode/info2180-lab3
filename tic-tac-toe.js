


window.onload = function (){
    setSquares();
    setSquareContent();
    hoverMouse();
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
    let finalArr = [];
    for(var i=0; i<squares.length; i++){
        let singleSquare = squares[i];
        if(finalArr.length <8){
            singleSquare.addEventListener("click",function (){
                if(finalArr.length == 0 || finalArr[finalArr.length-1] == "O" && finalArr.length<9){
                    singleSquare.innerHTML = "X";
                    singleSquare.classList.add("X");
                    finalArr.push("X");
                }else if(finalArr[finalArr.length-1] == "X" && finalArr.length<9){
                    singleSquare.innerHTML = "O";
                    singleSquare.classList.add("O");
                    finalArr.push("O");

                }
            })
        }

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