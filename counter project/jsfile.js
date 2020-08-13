var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");

var resetButton = document.querySelector("#reset");
var inputNum = document.querySelector("input");

var p1Span = document.querySelector("#p1Span");
var p2Span = document.querySelector("#p2Span");
var winSpan = document.querySelector("#win");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        p1Span.textContent = p1Score;
        if(p1Score === winningScore){
            p1Span.classList.add("winner");
            gameOver = true;
        }
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        p2Span.textContent = p2Score;
        if(p2Score === winningScore){
            p2Span.classList.add("winner");
            gameOver = true;
        }
       
    }
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Span.textContent = p1Score;
    p2Span.textContent = p2Score;
    gameOver = false;
    p1Span.classList.remove("winner");
    p2Span.classList.remove("winner");
}

resetButton.addEventListener("click", function(){
    reset();
});


inputNum.addEventListener("change", function(){ 
      winSpan.textContent = this.value;
      winningScore = Number(this.value);

      if (winningScore < 1){
          winningScore = 5;
          winSpan.textContent = "5";
          reset();
      }
});


