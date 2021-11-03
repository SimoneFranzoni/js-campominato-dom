let cellnum;
let cellrow;
const grill = document.querySelector('.grill');
let bombs = [];
let contatore = 0;
let gioco;
const bombnumber = 16;


document.getElementById('play').addEventListener('click', function(){
    play();
})

function play(){

    document.querySelector(".grill").innerHTML = "";
    document.getElementById("title").innerHTML = "";

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

    generatePlayGround();

}   

function generatePlayGround(){
    generateBomb();
    for (let i = 1; i <= cellnum; i++){
        const sq = createSquare(grill);
        sq.innerHTML = i;

        sq.addEventListener ('click', function(){ 
            if(gioco !== "finito"){    
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
            }
        })
    }
}

function generateBomb(){
   while (bombs.length < bombnumber){
        const bomb = Math.floor(Math.random() * cellnum) + 1;
        if(!bombs.includes(bomb)) bombs.push(bomb);
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
    gioco = 'finito';
    console.log(gioco);

    allSquare = document.querySelectorAll('.square'); //seleziona tutti gli elementi square
    console.log(allSquare);

    for (let i = 1; i <= allSquare.length; i++){
        for (let j = 0; j < bombnumber; j++){
            if(allSquare[i] === bombs[j]){
                allSquare[i].classList.add('bomb');
                
            }
        }
    
    }
}
