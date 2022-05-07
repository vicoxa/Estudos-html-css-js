let order = [];
let clickedOrder = [];
let score = 0;

//0- verde
//1- vermelho
//2- amarelo
//3- azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//cria ordem aleat�ria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

//acende a pr�xima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os bot�es clicados s�o os mesmos da ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert('Pontua��o: '+score+ '\n Voc� acertou! Iniciando pr�ximo n�vel!');
        nextLevel();
    }
}

//fun��o para o clique do usu�rio
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//fun��o que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } 
    else if(color == 1){
        return red;
    } 
    else if(color == 2){
        return yellow;
    } 
    else if(color == 3){
        return blue;
    }
}

//fun��o para pr�ximo n�vel
let nextLevel = () => {
    score ++;
    shuffleOrder();
}

//fun��o para game over
let gameOver = () => {
    alert('Pontua��o: '+score+' !\n Voc� perdeu o jogo!\n Clique em "OK" para iniciar um novo jogo');
    order = [];
    clickedOrder = [];

    playGame();
}

//fun��o para inciar o jogo
let playGame = () => {
    score = 0; 
    alert('Bem-vinde ao G�nius! Inciar novo jogo!');

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();