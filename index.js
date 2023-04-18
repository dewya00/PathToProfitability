let auto = document.getElementById("list-count-auto");
let paper = document.getElementById("list-count-paper");
let email = document.getElementById("list-count-email");
let saves = document.getElementById("list-count-saves");
let total = document.getElementById("balloon");
var numAuto= 0
var numPaper=0
var numEmail=0
var numSaves=0
var size = 4;
var balloon = document.getElementById("balloon");
 var confetti =document.getElementById("confetti");
function increaseCountAuto(){
    for(let i=0; i<1; i++){
        numAuto++
        
    }
    auto.textContent= numAuto
   total.textContent= numAuto+numPaper+numEmail+numSaves
    }
 function increaseCountPaper(){
    for(let i=0; i<1; i++){
         numPaper++
            
        }
        paper.textContent= numPaper
        total.textContent= numAuto+numPaper+numEmail+numSaves
        }
function increaseCountEmail(){
    for(let i=0; i<1; i++){
        numEmail++
        
    }
    email.textContent= numEmail
    total.textContent= numAuto+numPaper+numEmail+numSaves
    }
function increaseCountSaves(){
    for(let i=0; i<1; i++){
        numSaves++
        
    }
    saves.textContent= numSaves
    total.textContent= numAuto+numPaper+numEmail+numSaves
}
    
    function inflateBalloon() {
      size++;
      balloon.style.height = (size * 10) + "px";
      balloon.style.width = (size * 10) + "px";

      if ( size === 55) {
        balloon.style.background = "none";
        confetti.style.display = "block";
        setTimeout(function() {
          balloon.style.display = "none";
          confetti.style.display = "none";
        }, 6000);
    }



    }