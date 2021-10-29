

const p1Name = document.querySelector("#player1button")


const p2Name = document.querySelector("#player2button")


const player1Name = document.querySelector("#player1Name")
const player2Name = document.querySelector("#player2Name")
const sets = document.querySelector("#sets")
const playerNames = document.querySelector("#playerNames")

playerNames.addEventListener("click", function(e){
    p1Name.innerHTML = player1Name.value
    p2Name.innerHTML = player2Name.value
    e.preventDefault()
})


// Reset Game
const newGame = document.querySelector("#newGame")

newGame.addEventListener("click", function(){
    winner.innerHTML = ""
    p1Point.innerHTML = 0
    p2Point.innerHTML = 0
    p1Game.innerHTML = 0
    p2Game.innerHTML = 0
    p1Set.innerHTML = 0
    p2Set.innerHTML = 0
    p1Name.innerHTML = "player 1"
    p2Name.innerHTML = "player 2"
    p1Btn.disabled = false
    p2Btn.disabled = false
})






// ######################################################

// Tennis Game Code

//  P1 Code
const p1Btn = document.querySelector("#player1button")

const p1Point = document.querySelector("#p1point")

const p1Game = document.querySelector("#p1game")

const p1Set = document.querySelector("#p1set")

const winner = document.querySelector("#winner")

const ad = "ad";

p1Btn.addEventListener("click", function(){
    addP1Points()
})

const addP1Points = function(){

    while(p1Set.innerHTML!= sets.value ){
        if(p1Game.innerHTML == 6){
            p1Set.innerHTML++
            p2Game.innerHTML= 0
            return p1Game.innerHTML = 0
        }
 
        if(p2Point.innerHTML == 40 && p1Point.innerHTML == 40){
            return p1Point.innerHTML = "adv";
        }

        if(p1Point.innerHTML == "adv" && p2Point.innerHTML == 40){
            p1Game.innerHTML++
            p2Point.innerHTML = 0
            return p1Point.innerHTML = 0
        }

        if(p1Point.innerHTML == 0){
        return p1Point.innerHTML = 15
        }

        if(p1Point.innerHTML == 15){
            return p1Point.innerHTML = 30
        }

        if(p1Point.innerHTML == 30){
            return p1Point.innerHTML = 40
        }

        if(p1Point.innerHTML == 40 && p2Point.innerHTML != 40 && p2Point.innerHTML != "adv"){
            p1Game.innerHTML++
            p2Point.innerHTML = 0
            return p1Point.innerHTML = 0 
        }
        // adv to 40
        if(p2Point.innerHTML == "adv" && p1Point.innerHTML == 40){
            p2Point.innerHTML == 40
        }


    }
    winner.innerHTML = `${player1Name.value} wins`
    p1Btn.disabled = true
    p2Btn.disabled = true

}

//  P2 Code
const p2Btn = document.querySelector("#player2button")

const p2Point = document.querySelector("#p2point")

const p2Game = document.querySelector("#p2game")

const p2Set = document.querySelector("#p2set")

p2Btn.addEventListener("click", function(){
    addP2Points()
})

const addP2Points = function(){

    while(p2Set.innerHTML!= sets.value ){
        if(p2Game.innerHTML == 6){
            p2Set.innerHTML++
            p1Game.innerHTML = 0
            return p2Game.innerHTML = 0
        }

        if(p1Point.innerHTML == 40 && p2Point.innerHTML == 40){
            return p2Point.innerHTML = "adv";
        }

        if(p2Point.innerHTML == "adv" && p1Point.innerHTML == 40){
            p2Game.innerHTML++
            p1Point.innerHTML = 0
            return p2Point.innerHTML = 0
        }

        if(p2Point.innerHTML == 0){
        return p2Point.innerHTML = 15
        }

        if(p2Point.innerHTML == 15){
            return p2Point.innerHTML = 30
        }

        if(p2Point.innerHTML == 30){
            return p2Point.innerHTML = 40
        }

        if(p2Point.innerHTML == 40 && p1Point.innerHTML != 40){
            p2Game.innerHTML++
            p1Point.innerHTML = 0
            return p2Point.innerHTML = 0
        }

    }

    winner.innerHTML = `${player2Name.value} wins`
    p1Btn.disabled = true
    p2Btn.disabled = true
    

}