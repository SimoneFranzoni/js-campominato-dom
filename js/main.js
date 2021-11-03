let cellnum;
let cellrow;
const grill = document.querySelector('.grill');

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
    for (let i = 0; i < cellnum; i++){
        const sq = createSquare(grill);
        sq.innerHTML = i + 1;
        sq.addEventListener('click',function(){
            this.classList.add('clicked');
        })
    }
}

function createSquare(target){
    const sq = document.createElement('div');
    sq.classList.add('square');
    target.append(sq);
    return sq;
}