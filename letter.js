

function letter(letter, isCorrect){
    this.letter = letter,
    this.isCorrect = isCorrect
}

letter.prototype.result = function() {
    if(this.isCorrect === true){
        return this.letter
    } else {
        return '_'
    }
}

module.exports = letter