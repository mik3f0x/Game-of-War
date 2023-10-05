// Define card
class Card {
    constructor(suit, rank, score) {
        this.suit = suit
        this.rank = rank
        this.score = score
    }
}

// Build deck
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

class GameOfWar {
    constructor() {
      this.p1 = []
      this.p2 = []
      this.deal()
    }
  
    deal() {
      const gameDeck = new Deck()
      this.p1 = gameDeck.cards.slice(0, gameDeck.cards.length / 2)
      this.p2 = gameDeck.cards.slice(-gameDeck.cards.length/2)
    }

    message(x) {
        console.log(`Player 1 has ${this.p1[this.p1.length - x].rank} of ${this.p1[this.p1.length - x].suit} and Player 2 has ${this.p2[this.p2.length - x].rank} of ${this.p2[this.p2.length - x].suit}`)
    }

    compare(x) {
        this.message(x)
        if (this.p1[this.p1.length - x].score > this.p2[this.p2.length - x].score) {
            this.p1.unshift(...this.p1.splice(-x, x))
            this.p1.unshift(...this.p2.splice(-x, x))
            console.log(`Player 1 wins the round. They have ${this.p1.length} cards and Player 2 has ${this.p2.length} cards.`)
        } else {
            this.p2.unshift(...this.p2.splice(-x, x))
            this.p2.unshift(...this.p1.splice(-x, x))
            console.log(`Player 2 wins the round. They have ${this.p2.length} cards and Player 1 has ${this.p1.length} cards.`)
        }
    }

    play() {
        while (this.p1.length > 0 && this.p2.length > 0) {

            if (this.p1[this.p1.length - 1].score !== this.p2[this.p2.length - 1].score) {
                this.compare(1)
            } else {
                this.message(1)
                console.log('WAR!!!!!')
                if (this.p1.length > 3 && this.p2.length > 3) {
                    this.compare(4)
                } else {
                    console.log('Not enough cards for WAR')
                    break;
                }
            }
        }
            
        if (this.p1.length > this.p2.length) {
            console.log('Player 1 wins the game!')
        } else {
            console.log('Player 2 wins the game!')
        }
    }
}

const game = new GameOfWar()
game.play()