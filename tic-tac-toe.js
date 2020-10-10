window.onload = function (){
    setSquares();
}

function setSquares(){
    let board  = document.getElementById('board');
    let squares = board.children;
    for(var i=0; i<squares.length; i++){
        squares[i].setAttribute("class","square");
    }
}