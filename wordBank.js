
var WordBank = function() {
    this.words = ["superman", "batman", "wonder woman", "spider man", "iron man", "avengers"],
    this.pickRandomWord = function(){
        var length = this.words.length
        var randomNumber = Math.floor((Math.random() * length) + 1)
        randomNumber -= 1
        var randomWord = this.words[randomNumber]
        return randomWord
    }
}

module.exports = WordBank