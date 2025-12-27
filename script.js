let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    return randomCard
}
function startGame(){
    renderGame()
}

function renderGame() {
        cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false
    }
     
}

function newCard() {
    messageEl.textContent = "Drawing a new card from the deck!"
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}


