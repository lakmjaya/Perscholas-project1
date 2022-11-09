function startGame() {
    let x = Math.floor(Math.random()*52)+1
    document.getElementById("myImg").src = "cards/"+x+".svg";
  }
  document.getElementById("plyer1-selection").addEventListener("click", function play1Section() {
    document.getElementById("play1Card").src = "cards/6.svg";
  });

  function play2Section() {
        document.getElementById("play2Card").src = "cards/4.svg";
  }