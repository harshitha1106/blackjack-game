let firstcard = getrandomcard()
let secondcard = getrandomcard()
let cards = [firstcard, secondcard]
let sum = firstcard + secondcard

let hasblackjack = false
let isalive = false
let message = ""

let messageel = document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardsel = document.getElementById("card-el")

function startgame(){
    isalive = true
    hasblackjack = false

    cards = [firstcard, secondcard]
    sum = firstcard + secondcard

    rendergame()
}
function getrandomcard(){
    let randomnumber= Math.floor(Math.random()*13)+1
    if(randomnumber>10){
        return 10
    }else if(randomnumber===10){
        return 11
    }
    else{
        return randomnumber
    }
}

function rendergame(){
    cardsel.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsel.textContent += cards[i] + " "
    }

    sumel.textContent = "Sum: " + sum

    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "You've got Blackjack!"
        hasblackjack = true
    } else {
        message = "You're out of the game"
        isalive = false
    }

    messageel.textContent = message
}

function newcard(){
   if (isalive && !hasblackjack) {
       let card = getrandomcard()
       sum += card
       cards.push(card)
       rendergame()
   }
}