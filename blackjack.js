let cards=[]
let sum=0
let isAlive = false
let hasBlakJack = false
let message= ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

 function renderGame()
{
    sumEl.textContent = "Sum:" + " " + sum
    cardsEl.textContent = "Cards: "
    for(let i=0 ; i <cards.length ; i++)
    {
        cardsEl.textContent += cards[i]+ " " 
    }


    if(sum <= 20)
{
    message= "Do you want to draw a new card ?"
}
else if(sum === 21)
{
message = " You won the Balckjack"
hasBlakJack = true
}
else if(sum >= 21)
{
message = " You loose the Game"
isAlive = false
}
messageEl.textContent = message
}

function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10)
    {
    return 10
    }
    else if(randomNumber === 1)
    {
        return 11
    }
    else{
         return randomNumber
    }
}
function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
        cards = [firstCard , secondCard]
        sum = firstCard + secondCard 
  renderGame()  
}

function newcard()
{

    if(isAlive === true && hasBlakJack === false)
    {
   let card = getRandomCard()
   sum += card
   cards.push(card)
   
   renderGame()
    }
}
