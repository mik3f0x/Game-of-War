// Build deck
class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}

class Deck {
    constructor() {
        this.cards = []
        this.createDeck()
    }

    createDeck() {
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                const card = new Card(suits[i], ranks[j], j + 2)
                this.cards.push(card)
            }
        }

        this.shuffle()
    }

    shuffle() {
        const cards = this.cards
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            let temp = cards[i]
            cards[i] = cards[j]
            cards[j] = temp        }
    }
}

const gameDeck = new Deck
// console.log(gameDeck.cards)


// Deal cards
const player1cards = gameDeck.cards.slice(0, gameDeck.cards.length / 2)
// console.log(player1cards)

const player2cards = gameDeck.cards.slice(-gameDeck.cards.length/2)
// console.log(player2cards)


// Gameplay
while (player1cards.length > 0 && player2cards.length > 0) {

    // let p1i = player1cards.length - 1;
    // let p2i = player2cards.length - 1;

    console.log(`Player 1 has ${player1cards[player1cards.length - 1].rank} of ${player1cards[player1cards.length - 1].suit} and Player 2 has ${player2cards[player2cards.length - 1].rank} of ${player2cards[player2cards.length - 1].suit}`)

    if (player1cards[player1cards.length - 1].score !== player2cards[player2cards.length - 1].score) {
        if (player1cards[player1cards.length - 1].score > player2cards[player2cards.length - 1].score) {
            player1cards.unshift(player1cards.pop())
            player1cards.unshift(player2cards.pop())
            console.log(`Player 1 wins this battle. They have ${player1cards.length} cards and Player 2 has ${player2cards.length} cards.`)
        } else {
            player2cards.unshift(player2cards.pop())
            player2cards.unshift(player1cards.pop())
            console.log(`Player 2 wins this battle. They have ${player2cards.length} cards and Player 1 has ${player1cards.length} cards.`)
        }
    } else {
        console.log('WAR!!!!!'); //WAR: advance 4 cards and run comparison algo
        if (player1cards.length > 3 && player2cards.length > 3) {
            if (player1cards[player1cards.length - 4].score > player2cards[player2cards.length - 4].score) {
                for (let i = 0; i < 4; i++) {
                    player1cards.unshift(player1cards.pop())
                    player1cards.unshift(player2cards.pop())
                }
                console.log(`Player 1 wins the war. They have ${player1cards.length} cards and Player 2 has ${player2cards.length} cards.`)
            } else {
                for (let i = 0; i < 4; i++) {
                    player2cards.unshift(player2cards.pop())
                    player2cards.unshift(player1cards.pop())
                }
                console.log(`Player 2 wins the war. They have ${player2cards.length} cards and Player 1 has ${player1cards.length} cards.`)
            }
        } else {
            console.log('Not enough cards for WAR')
            break;
        }
    }
}

// Winner statement
if (player1cards.length > player2cards.length) {
    console.log('Player 1 wins the game!')
} else {
    console.log('Player 2 wins the game!')
}