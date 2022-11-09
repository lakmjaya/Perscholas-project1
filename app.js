function startGame() {
    let x = Math.floor(Math.random()*52)+1
    document.getElementById("myImg").src = "cards/"+x+".svg";
  }
function play1Section() {
    // let number =parseInt(document.getElementById("num").value)  ;
    // console.log(number)
    // let sign = parseInt(document.getElementsById("sign").value);
    // console.log(sign)
    // let y = 4 //number + sign
    // console.log(y)
    document.getElementById("play1Card").src = "cards/6.svg";
  }

  function play2Section() {
    // let number =parseInt(document.getElementById("num1").value)  ;
    // console.log(number)
    // let sign = parseInt(document.getElementsById("sign1").value);
    // console.log(sign)
    // let y = 5 //number + sign
    // console.log(y)
    document.getElementById("play2Card").src = "cards/4.svg";
  }