let scoreHome = 0
let scoreGuest = 0
function plus1(){
    scoreHome = scoreHome + 1
    document.getElementById("score1").textContent =  scoreHome
}
function plus2(){
    scoreHome = scoreHome + 2
    document.getElementById("score1").textContent = scoreHome 
}
function plus3(){
    scoreHome = scoreHome + 3
    document.getElementById("score1").textContent = scoreHome 
}

function gplus1(){
    scoreGuest = scoreGuest + 1
    document.getElementById("score2").textContent =  scoreGuest
}
function gplus2(){
    scoreGuest = scoreGuest + 2
    document.getElementById("score2").textContent = scoreGuest 
}
function gplus3(){
    scoreGuest = scoreGuest + 3
    document.getElementById("score2").textContent = scoreGuest
}