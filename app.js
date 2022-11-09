function startGame() {
    let x = Math.floor(Math.random()*52)+1
    document.getElementById("myImg").src = "cards/"+x+".svg";
  }
function play1Section() {
    let number =parseInt(document.getElementById("num").value)  ;
    console.log(number)
    //let type = parseInt(document.getElementById("mySelect").value);
  }