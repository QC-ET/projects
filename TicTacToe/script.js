let playerChoice = "X";
let computerChoice = "O";

const playingBoard = new Array();
let board = document.getElementById("board");
let message = document.getElementById("message");

let reset = document.getElementById("reset");
reset.addEventListener("click", () =>{
    board.innerHTML = "";    
    createBoard();
});

function createBoard(){

    message.innerText = "No winner";
    
    for(var i=0; i<3; i++){
        let row = document.createElement("div");
        row.classList.add("row");

        board.appendChild(row);

        for(var x=0; x<3; x++){
            let square = document.createElement("div");
            square.classList.add("square"); 
            var id = i+""+x;           
            square.setAttribute("id", id);
            square.innerText = "";
            playingBoard[id] = "";

            square.addEventListener("click", (e) => {
                if(square.innerText !== "")
                {
                    return;
                }
                res = e.target.id; 
                square.innerText = playerChoice;
                playingBoard[res] = playerChoice;
                if(checkForWinner()){
                    return;
                }
                var computerId = computerPlay();
                var computer = document.getElementById(computerId); 
                computer.innerText = computerChoice;
                playingBoard[computerId] = computerChoice; 
                if(checkForWinner()){
                    return;
                }
            })
            row.appendChild(square);
        }        
    }
}

function computerPlay(){
    message.innerText = "computer is choosing";
    var x = Math.floor(Math.random() * 3);
    var y = Math.floor(Math.random() * 3);
    if(playingBoard[x+""+y] == ""){      
        return x+""+y;
    } else {
        return computerPlay();
    }
}

function checkForWinner(){
    message.innerText = "checking for winner";
    // horizontal
    if(playingBoard["00"] !== "" 
    && playingBoard["00"] == playingBoard["01"]
    && playingBoard["01"] == playingBoard["02"])
    {
        message.innerText = "We have a winner!";
        return true;
    }

    if(playingBoard["10"] !== "" 
    && playingBoard["10"] == playingBoard["11"]
    && playingBoard["11"] == playingBoard["12"])
    {
        message.innerText = "We have a winner!";
        return true;
    }

    if(playingBoard["20"] !== "" 
    && playingBoard["20"] == playingBoard["21"]
    && playingBoard["21"] == playingBoard["22"])
    {
        message.innerText = "We have a winner!";
        return true;
    }

    // vertical
    if(playingBoard["00"] !== "" 
    && playingBoard["00"] == playingBoard["10"]
    && playingBoard["10"] == playingBoard["20"])
    {
        message.innerText = "We have a winner!";
        return true;
    }

    if(playingBoard["01"] !== "" 
    && playingBoard["01"] == playingBoard["11"]
    && playingBoard["11"] == playingBoard["21"])
    {
        message.innerText = "We have a winner!";
        return true;
    }

    if(playingBoard["02"] !== "" 
    && playingBoard["02"] == playingBoard["12"]
    && playingBoard["12"] == playingBoard["22"])
    {
        message.innerText = "We have a winner!";
        return true;
    }

    // diagonal
    if(playingBoard["00"] !== "" 
    && playingBoard["00"] == playingBoard["11"]
    && playingBoard["11"] == playingBoard["22"])
    {
        message.innerText = "We have a winner!";
        return true;
    }

    if(playingBoard["02"] !== "" 
    && playingBoard["02"] == playingBoard["11"]
    && playingBoard["11"] == playingBoard["20"])
    {
        message.innerText = "We have a winner!";
        return true;
    }

    return false;
}

createBoard();

