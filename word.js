
var letter = require('./letter.js')

function word(word){
    this.word = word,
    this.lettersArray = [],
    this.create = function(){
        for (var i = 0; i < this.word.length; i++){
            this.lettersArray.push(new letter(this.word.charAt(i), false))
        }
        console.log(this.lettersArray)
    }
    

}

module.exports = word