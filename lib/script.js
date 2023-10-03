console.log('script is running')

/*
build deck
*/

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
console.log(gameDeck.cards)




/*
assign two players
*/

class Player {
    constructor{
        this.cards = []
    }
}

player1 = {
    cards: [];
    hand: [];
    facecard: ;
}

/*
give them their cards

do a hand


iterate this until all cards are gone



*/


