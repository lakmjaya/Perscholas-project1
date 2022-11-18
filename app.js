    let y =0
    let z=0
    let lock1 =0
    let lock2 =0
    loadPage()
    document.getElementById('pic').style.visibility = 'none'
    let ply1 = document.getElementById("plyer1-selection")
    
    function play1Section() {
      let number =0
      var val=-1
      number = parseInt( document.getElementById("num").value)
      var radios = document.getElementsByName('fav_sign');
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked ) {
          // do whatever you when the checked radio
          val=parseInt(radios[i].value);
          break
        }
      }
      if(number !=0 && val >=0){
        y = number + val
        document.getElementById("play1Card").src = "cards/"+y+".svg";
        setVisible("plyer1-lock")
        setVisible("game")      
      }else if(number ==0 && val ==0){
        alert("Player 1 : Please select your favorite betting card number and Sign")
      }else if(number ==0){
        alert("Player 1 : Please select your favorite betting card number")
      }else if(val < 0){
        alert("Player 1 : Please select your favorite betting card sign")
      }
      document.getElementById("game").innerHTML = "Player1 can lock the selected card";   
    }
    function loadPage(){
      x=0
      y=0
      z=0
      lock1=0
      lock2=0
      setHidden("myImg")
      setHidden("pic")
      setHidden("restart")
      setHidden("start-selection")
      setHidden("plyer1-lock")
      setHidden("plyer2-lock")
      setHidden("game")
      document.getElementById("form1").style.boxShadow ="0px 0px 10px 5px #f0c990";
      document.getElementById("form2").style.boxShadow ="0px 0px 10px 5px #f0c990";
    }
    function play2Section() {
      var radios1 = document.getElementsByName('fav_sign1');
      var val1= -1
      let number1 =0
          number1 = parseInt( document.getElementById("num1").value)
        for (var i = 0, length = radios1.length; i < length; i++) {
          if (radios1[i].checked) {
            // do whatever when the checked radio
            val1=parseInt(radios1[i].value);
            break
          }  
        }
      if(number1 !=0 && val1 >= 0){
          z = number1 + val1
          document.getElementById("play2Card").src = "cards/"+z+".svg";
          setVisible("plyer2-lock")
          setVisible("game")
        }else if(number1 ==0 && val1 ==0){
          alert("Player 2 : Please select your favorite betting card number and Sign")
        }else if(number1 ==0){
          alert("Player 2 : Please select your favorite betting card number")       
        }else if(val1 < 0) {
          alert("Player 2 : Please select your favorite betting card sign")
      }
      document.getElementById("game").innerHTML = "Player2 can lock the selected card";
    }
    ply1.addEventListener("click", play1Section) 

    function startGame() {
      setVisible("game")
      document.getElementById("game").innerHTML = "Random Betting Card - Click Again";
      let x = Math.floor(Math.random()*52)+1
      document.getElementById("myImg").src = "cards/"+x+".svg";
      if(z===x && y===x){
        alert(" Both betting palyers are win the game again, Plaese refresh the page" )
        setHidden("pic")
        setVisible("restart")
        setHidden("start-selection")
      }else if(y===x){
        document.getElementById("game").innerHTML = "Player 1 win the Card - Click Restart to Continue";
        document.getElementById("form1").style.boxShadow ="0px 0px 20px 10px hsl(120, 89%, 45%)";
        alert( "Player 1 win the game")
        setHidden("pic")
        setVisible("restart")
        setHidden("start-selection")
      }else if(z===x ){
        document.getElementById("game").innerHTML = "Player 2 win the Card - Click Restart to Continue";
        document.getElementById("form2").style.boxShadow ="0px 0px 20px 10px hsl(120, 89%, 45%)";
        setHidden("pic")
        alert( "Player 2 win the game")
        setVisible("restart")
        setHidden("start-selection")
      }
      }

      function disableButton(id){
        document.getElementById(id).disabled = true
      }
      function setVisible(id){
        document.getElementById(id).style.visibility ="visible"
      }
      function setHidden(id){
        document.getElementById(id).style.visibility ="hidden"
      }

      function enableButton(id){
        document.getElementById(id).disabled = false
      }

      function lockPlayer1(){
        disableButton("plyer1-selection")
        lock1 =1
        if (z===y){
          document.getElementById("game").innerHTML = "Click to Re-Start the Game";
          setVisible("restart")
        }else if(lock1 >0 && lock2 >0){
            setVisible ("start-selection")
            setVisible("myImg")
            setVisible("pic")
            document.getElementById("game").innerHTML = "Click to Start the Game"; 
        }else{
          document.getElementById("game").innerHTML = "Waiting for the Player2's Selection....";
        }
        setVisible("game")
        setHidden("plyer1-lock")
      }

      function lockPlayer2(){
        disableButton("plyer2-selection")
        lock2=1
        if (z===y){
          document.getElementById("game").innerHTML = "Click to Re-Start the Game";
          setVisible("restart") 
        }else if (lock1 >0 && lock2 >0){
            setVisible("start-selection")
            setVisible("myImg")
            setVisible("pic")
            document.getElementById("game").innerHTML = "Click to Start the Game";
          
        }else{
          document.getElementById("game").innerHTML = "Waiting for the Player1's Selection....";
        }
        setHidden("plyer2-lock")
        setVisible("game")
      }

      function restartGame(){
        document.getElementById("play1Card").src = "cards/back.jpg";
        document.getElementById("play2Card").src = "cards/RED_BACK.svg";
        enableButton("plyer1-selection")
        enableButton("plyer2-selection")
        loadPage()
        }