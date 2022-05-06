var player, winner = null;
var selectedPlayer = document.getElementById('player-sel');
var selectedWinner = document.getElementById('player-win');
var winnerColor1 = document.getElementById('winner');

changePlayer('X');

function changeSquare(id){

    if (winner !== null){
        return;
    }

    var square = document.getElementById(id);

    if (square.innerHTML !== '-'){
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    if (player === 'X'){
        player = 'O';
    }
    else{
        player = 'X';
    }
    
    changePlayer(player);
    checkWinner();
}

function changePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWinner(){
    var square1 = document.getElementById(1);
    var square2 = document.getElementById(2);
    var square3 = document.getElementById(3);
    var square4 = document.getElementById(4);
    var square5 = document.getElementById(5);
    var square6 = document.getElementById(6);
    var square7 = document.getElementById(7);
    var square8 = document.getElementById(8);
    var square9 = document.getElementById(9);

    if (checkSquence(square1, square2, square3)){
        changeSquareColor(square1, square2, square3);
        changeWinner(square1);
        return; 
    }
    if (checkSquence(square4, square5, square6)){
        changeSquareColor(square4, square5, square6);
        changeWinner(square4);
        return;
    }
    if (checkSquence(square7, square8, square9)){
        changeSquareColor(square7, square8, square9);
        changeWinner(square7);
        return;
    }
    if (checkSquence(square1, square4, square7)){
        changeSquareColor(square1, square4, square7);
        changeWinner(square1);
        return;
    }
    if (checkSquence(square2, square5, square8)){
        changeSquareColor(square2, square5, square8);
        changeWinner(square2);
        return;
    }
    if (checkSquence(square3, square6, square9)){
        changeSquareColor(square3, square6, square9);
        changeWinner(square3);
        return;
    }
    if (checkSquence(square1, square5, square9)){
        changeSquareColor(square1, square5, square9);
        changeWinner(square1);
        return;
    }
    if (checkSquence(square3, square5, square7)){
        changeSquareColor(square3, square5, square7);
        changeWinner(square3);
    }
}

function changeWinner(square){
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function changeSquareColor(square1, square2, square3){
    square1.style.background = '#00ff00';
    square2.style.background = '#00ff00';
    square3.style.background = '#00ff00';
}

function checkSquence(square1, square2, square3){
    var isequal = false;

    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        isequal = true;
    }

    return isequal;
}

function restart(){
    winner = null;    
    selectedWinner.innerHTML = '';

    for (var i = 1; i <= 9; i++){
        var square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
    }

    changePlayer('X');
}
