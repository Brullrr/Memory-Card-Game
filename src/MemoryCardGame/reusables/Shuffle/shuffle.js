const shuffle = (flashcards) => {
    let currentIndex = flashcards.length
    let temporaryValue = Number;
    let randomIndex = Number;

    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;

        temporaryValue = flashcards[currentIndex]
        flashcards[currentIndex] = flashcards[randomIndex]
        flashcards[randomIndex] = temporaryValue
    }

    return flashcards
}

export default shuffle