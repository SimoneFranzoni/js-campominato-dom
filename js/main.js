let cellnum;
let cellrow;
const grill = document.querySelector('.grill');
let bombs = [];
let contatore = 0;


document.getElementById('play').addEventListener('click', function(){
    play();
})

function play(){

    const level = document.getElementById('difficult').value;
    if (level == "easy"){
        cellnum = 100;
        cellrow = 10;
    } else if (level == "normal"){
        cellnum = 81;
        cellrow = 9;
    } else if (level == "hard"){
        cellnum = 49;
        cellrow = 7;
    }
    console.log(cellnum);

    var element = document.getElementById("title");
    element.classList.add("sf-d-n");

    /*var element = document.getElementsByClassName("grill");
    element.classList.add("sf-d-n");*/
    
    generatePlayGround();
}   

function generatePlayGround(){
    generateBomb();
    for (let i = 1; i <= cellnum; i++){
        const sq = createSquare(grill);
        sq.innerHTML = i;

        sq.addEventListener ('click', function(){     
            for (let j = 0; j < 16; j++){
                if(i === bombs[j]){
                    this.classList.add('bomb');
                    endProgram();
                }
                else{
                    this.classList.add('free');
                }
            }
            contatore++; 
        })
    }
}

function generateBomb(){
// Vengono generati 16 bombe ma con numeri anche uguali tra di loro
    for (let i = 0; i < 16; i++){
        bomb = Math.floor(Math.random() * cellnum) + 1;
        bombs.push(bomb);
    }
    console.log(bombs);
}


function createSquare(target){
    const sq = document.createElement('div');
    sq.classList.add('square');
    target.append(sq);
    return sq;
}


function endProgram(){
    document.getElementById('result').innerHTML = "Hai perso, hai azzeccato "+contatore+" tentativi";
    console.log(contatore);
/*
    for (let i = 1; i <= cellnum; i++){
        for (let j = 0; j < 16; j++){
            if(i === bombs[j]){
                sq.classList.add('bomb');
            }
            else{
                sq.classList.add('free');
            }
        }
    }*/
}
