// Teen Patti Simple Logic

// Cards & Suits
const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Deck बनाना
function createDeck() {
    let deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push(value + suit);
        }
    }
    return deck;
}

// Shuffle function
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Card deal करना
function dealCards(deck, playerCount = 2) {
    let hands = [];
    for (let i = 0; i < playerCount; i++) {
        hands.push(deck.splice(0, 3));
    }
    return hands;
}

// Game start
function startGame() {
    let deck = createDeck();
    deck = shuffleDeck(deck);

    let players = dealCards(deck, 2); // 2 players के लिए
    console.log("Player 1:", players[0]);
    console.log("Player 2:", players[1]);
}

// Run Game
startGame();
