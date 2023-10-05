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
            cards[j] = temp        
        }
    }
}

const gameDeck = new Deck
// console.log(gameDeck.cards)


// Deal cards
const p1 = gameDeck.cards.slice(0, gameDeck.cards.length / 2) // Player 1
// console.log(p1)

const p2 = gameDeck.cards.slice(-gameDeck.cards.length/2) // Player 2
// console.log(p2)


// Gameplay
while (p1.length > 0 && p2.length > 0) {

    console.log(`Player 1 has ${p1[p1.length - 1].rank} of ${p1[p1.length - 1].suit} and Player 2 has ${p2[p2.length - 1].rank} of ${p2[p2.length - 1].suit}`)

    if (p1[p1.length - 1].score !== p2[p2.length - 1].score) {
        if (p1[p1.length - 1].score > p2[p2.length - 1].score) {
            p1.unshift(p1.pop())
            p1.unshift(p2.pop())
            console.log(`Player 1 wins this battle. They have ${p1.length} cards and Player 2 has ${p2.length} cards.`)
        } else {
            p2.unshift(p2.pop())
            p2.unshift(p1.pop())
            console.log(`Player 2 wins this battle. They have ${p2.length} cards and Player 1 has ${p1.length} cards.`)
        }
    } else {
        console.log('WAR!!!!!'); //WAR: Compare 4th card down from each deck
        if (p1.length > 3 && p2.length > 3) {
            console.log(`Player 1 has ${p1[p1.length - 4].rank} of ${p1[p1.length - 4].suit} and Player 2 has ${p2[p2.length - 4].rank} of ${p2[p2.length - 4].suit}`)
            if (p1[p1.length - 4].score > p2[p2.length - 4].score) {
                p1.unshift(...p1.splice(-4, 4))
                p1.unshift(...p2.splice(-4, 4))
                console.log(`Player 1 wins the war. They have ${p1.length} cards and Player 2 has ${p2.length} cards.`)
            } else {
                p2.unshift(p2.splice(-4, 4))
                p2.unshift(p1.splice(-4, 4))
                console.log(`Player 2 wins the war. They have ${p2.length} cards and Player 1 has ${p1.length} cards.`)
            }
        } else {
            console.log('Not enough cards for WAR')
            break;
        }
    }
}

// Winner statement
if (p1.length > p2.length) {
    console.log('Player 1 wins the game!')
} else {
    console.log('Player 2 wins the game!')
}