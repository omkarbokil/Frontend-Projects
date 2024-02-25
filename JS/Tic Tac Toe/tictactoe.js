let boxes = document.querySelectorAll(".xo");
let turnc = document.querySelector(".turn");
let win = document.querySelector(".win")
let reset = document.querySelector("#reset")
let newGame = document.querySelector("#newgame")
let item4 = document.querySelector("#item-4");
let item5 = document.querySelector("#item-5");
let round1 = document.querySelector('#round-1');
let round2 = document.querySelector('#round-2');
let round3 = document.querySelector('#round-3');
let round4 = document.querySelector('#round-4');
let roundCount = document.querySelector('#round-count');
let turn = true;
let xCount = 0;
let oCount = 0;
let roundTotal = 0;
let winnerCount = 0, rounds = 0 ;
let winText = document.querySelector(".win-modal-text");
let roundsMsg = document.querySelector(".rounds-msg");
let scorePlayer1 = document.querySelector("#score-player1-score");
let scorePlayer2 = document.querySelector("#score-player2-score");
let winnerMsg = document.querySelector(".winner-msg");
let winModal = document.querySelector(".win-modal");
let resumePlaying = document.querySelector(".resume-playing");

const patterns = [
     [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
]

// Setting Initial Turn
     checkInitialTurn = (t) => {
          if(t){
               turnc.innerText = "O's Turn"
               turn = true;
          }
          else{
               turnc.innerText = "X's Turn"
          }
     }
     checkInitialTurn(true);
     
     checkturn = (turn) => {
          if(turn){
               turnc.innerText = "O's Turn"
          }
          else{
               turnc.innerText = "X's Turn"
          }
     }

// Winner Function
winner = (winner) => {
     win.innerText = `Winner is '${winner}'`
     turnc.innerText = "";
     if(winner === 'X'){
          xCount += 1;
          item4.innerText = xCount;
     }
     else{
          oCount += 1;
          item5.innerText = `${oCount}`;
     }

     winnerCount +=1;
     if(rounds !== 0){
          if(roundTotal === winnerCount){
               console.log(winnerCount + " wins the game!");
               rounds -= 1;
               roundCount.innerText = rounds;
               winnerCount = 0;
               if(xCount > oCount){
                    winModal.style.visibility = "visible";
                    roundsMsg.innerText = `${roundTotal} Rounds`;
                    scorePlayer1.innerText = xCount;
                    scorePlayer2.innerText = oCount;
                    winnerMsg.innerText = `Winner is 'X'`;
               }
               else if(oCount > xCount){
                    winModal.style.visibility = "visible";
                    roundsMsg.innerText = `${roundTotal} Rounds`;
                    scorePlayer2.innerText = oCount;
                    scorePlayer1.innerText = xCount;
                    winnerMsg.innerText = `Winner is 'O'`;
               }
               else{
                    winModal.style.visibility = "visible";
                    roundsMsg.innerText = `${roundTotal} Rounds`;
                    scorePlayer2.innerText = oCount;
                    scorePlayer1.innerText = xCount;
                    winnerMsg.innerText = `Tie`;
               }
               // resetAll();
          }
          else{
               rounds -= 1;
               roundCount.innerText = rounds;
          }
     }
}

// Checking Winner
     const check = () => {
          for (let  p of patterns){
               let pos1 = boxes[p[0]].innerText;
               let pos2 = boxes[p[1]].innerText;
               let pos3 = boxes[p[2]].innerText;

          if(pos1 != '' && pos1 != '' && pos1 != ''){
               if(pos1 === pos2 && pos2 === pos3){
                    disableAll(); // disables all the buttons after winning
                    winner(pos1);
               }
          }
     }
}

// Disabel all buttons
disableAll = () => {
     for(let b of boxes){
          b.disabled = true;
     }
}

// Reset Button click Function
let resetAll = () => {
     for(let b of boxes){
          b.innerText = '';
          b.disabled = false;
          win.innerText = '';
          b.style.backgroundColor = "white";
          turnc.innerText = "";
          checkInitialTurn(true);
     }
}

// New Game Button click Function
let startNewGame = () => {
     for(let b of boxes){
          b.innerText = '';
          b.disabled = false;
          win.innerText = '';
          b.style.backgroundColor = "white";
          turnc.innerText = "";
          checkInitialTurn(true);
          item4.innerText = "0";
          item5.innerText = "0";
          roundCount.innerText = "";
               xCount = 0;
               oCount = 0;
          }
     }

// Close and Play Button Click
     resumePlaying.addEventListener('click', () => {
          startNewGame();
          winModal.style.visibility = "hidden";
     });

// Getting rounds data
     round1.addEventListener("click", () =>{
          if(round1.innerText === '3 Rounds'){
               rounds = 3;
               roundCount.innerText = rounds;
               roundTotal = rounds;
               // startNewGame(); // Once user clicked on Rounds button, new game will start
          }
     })
     
     round2.addEventListener("click", () =>{
          if(round2.innerText === '5 Rounds'){
               rounds = 5;
               roundCount.innerText = rounds;
               roundTotal = rounds;
               // startNewGame(); // Once user clicked on Rounds button, new game will start
          }
     })

round3.addEventListener("click", () =>{
     if(round3.innerText === '10 Rounds'){
          rounds = 10;
          roundCount.innerText = rounds;
          roundTotal = rounds;
          // startNewGame(); // Once user clicked on Rounds button, new game will start
     }
})

// Setting text and background to selected box
boxes.forEach((box, b, c) => {
     box.addEventListener("click", () => {
          if(turn){
               box.innerText = 'O';
               box.style.backgroundColor = "rgb(255, 0, 0)";
               turn = false;
               checkturn(turn);
               console.log(box, b, c);
          }
          else{
               box.innerText = 'X'
               box.style.backgroundColor = "rgb(0, 187, 220)";
               turn = true;
               checkturn(turn);
          }
          box.disabled = true;
          check();
     })
})

// Reset Button click
     reset.addEventListener('click',resetAll);

// New Game Button click
     newGame.addEventListener('click',startNewGame);