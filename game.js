


var game = function(numberOfLetter) {
    this.totalGuess = numberOfLetter + 5,
    this.totalNumberOfLetter = numberOfLetter,
    this.letterLeftToGuess = numberOfLetter,
    this.win = 0,
    this.lose = 0,
    this.resultOfTheGuess = function(){
        if(this.totalGuess <= 0 && this.letterLeftToGuess > 0){
            this.lose += 1
            console.log("\nYour score is: " + this.win + " Wins, " + this.lose + " Loses\n")
        } else if(this.totalGuess > 0 && this.letterLeftToGuess === 0){
            this.win += 1
            console.log("\nYour score is: " + this.win + " Wins, " + this.lose + " Loses\n")
        }
    }
}

module.exports = game 