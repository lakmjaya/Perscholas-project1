  let y =0
  let z=0
  let ply1 = document.getElementById("plyer1-selection")
  
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
    }else if(number ==0){
      alert("Player 1 : Please select your favorite card number")
    }else if(val ==0){
      alert("Player 1 : Please select your favorite card sign")
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
      }else if(number1 ==0){
        alert("Player 2 : Please select your favorite card number")       
      }else if(val1 ==0) {
        alert("Player 2 : Please select your favorite card sign")
    }
  }
  ply1.addEventListener("click", play1Section) 

  function startGame() {
    let x = Math.floor(Math.random()*52)+1
    document.getElementById("myImg").src = "cards/"+x+".svg";
    if(z===x){
      alert( "Player 2 win the game")
    }else if(y===x){
      alert( "Player 1 win the game")
    }else if(z===x && y===x){
      alert( " The game again, Plaese refresh the page")
    }
    }