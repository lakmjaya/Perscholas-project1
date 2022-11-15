  let y =0
  let z=0
  let ply1 = document.getElementById("plyer1-selection")
  document.getElementById("plyer1-lock").disabled = true
  document.getElementById("plyer2-lock").disabled = true
  function play1Section() {
    let number =0
    var val=0
    number = parseInt( document.getElementById("num").value)
    var radios = document.getElementsByName('fav_sign');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked ) {
        // do whatever you when the checked radio
        val=parseInt(radios[i].value);
        console.log(val)
        break
      }
    }
    if(number !=0 && val !=0){
      y = number + val
      document.getElementById("play1Card").src = "cards/"+y+".svg";
      document.getElementById("plyer1-lock").disabled = false
    }else if(number ==0 && val ==0){
      alert("Player 1 : Please select your favorite betting card number and Sign")
    }else if(number ==0){
      alert("Player 1 : Please select your favorite betting card number")
    }else if(val ==0){
      alert("Player 1 : Please select your favorite betting card sign")
    }   
  }

  function play2Section() {
    var radios1 = document.getElementsByName('fav_sign1');
    var val1=0
    let number1 =0
        number1 = parseInt( document.getElementById("num1").value)
      for (var i = 0, length = radios1.length; i < length; i++) {
        if (radios1[i].checked) {
          // do whatever when the checked radio
          val1=parseInt(radios1[i].value);
          break
        }
        
      }
    if(number1 !=0 && val1 !=0){
        z = number1 + val1
        document.getElementById("play2Card").src = "cards/"+z+".svg";
        document.getElementById("plyer2-lock").disabled = false
      }else if(number1 ==0 && val1 ==0){
        alert("Player 2 : Please select your favorite betting card number and Sign")
      }else if(number1 ==0){
        alert("Player 2 : Please select your favorite betting card number")       
      }else if(val1 ==0) {
        alert("Player 2 : Please select your favorite betting card sign")
    }
  }
  ply1.addEventListener("click", play1Section) 

  function startGame() {
    let x = Math.floor(Math.random()*52)+1
    document.getElementById("myImg").src = "cards/"+x+".svg";
    if(z===x){
      alert( "Player 2 win the game")
      document.getElementById("restart").disabled = false
      document.getElementById("start-selection").disabled = true
    }else if(y===x){
      alert( "Player 1 win the game")
      document.getElementById("restart").disabled = false
      document.getElementById("start-selection").disabled = true
    }else if(z===x && y===x){
      alert( " The game again, Plaese refresh the page")
    }
    }

    function lockPlayer1(){
      document.getElementById("plyer1-selection").disabled = true
      document.getElementById("start-selection").disabled = false
    }

    function lockPlayer2(){
      document.getElementById("plyer2-selection").disabled = true
      document.getElementById("start-selection").disabled = false
    }

    function restartGame(){
      document.getElementById("plyer2-selection").disabled = false
      document.getElementById("plyer2-selection").disabled = false
    }