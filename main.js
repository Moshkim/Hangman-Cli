
var inquirer = require('inquirer')
var words = require('./word.js')
var game = require('./game.js')
var wordBank = require('./wordBank.js')
var letter = require('./letter.js')
var wordArray = []

function StartNewGame() {
    var createWordBank = new wordBank()
    var pickedWord = createWordBank.pickRandomWord()
    var wordsArray = pickedWord.split(' ')
    var numberOfSpace = 0
    if(wordsArray.length > 1){
        numberOfSpace = wordsArray.length-1
    } else {
        numberOfSpace = 0
    }
    var numberOfLetters = pickedWord.length-numberOfSpace
    var newGame = new game(numberOfLetters)
    
    function StartGame() {
        
        console.log(wordsArray)
        for(var i = 0; i < wordsArray.length; i++){
            wordArray.push(new words(wordsArray[i]))
            wordArray[i].create()
        }
        
        recursiveInquirer()
        
        
    }
    
    function recursiveInquirer(){
        inquirer.prompt([
            {
                type: 'input',
                message: 'Guess a letter!',
                name: 'letter'
            }
        ]).then(function(ans){
            console.log(ans.letter)
            var letter = ans.letter
            var currentStatus = ""
            var flag = 0
            
            for(var i = 0; i < wordArray.length; i++){
                for(var j = 0; j < wordArray[i].lettersArray.length; j++){
                    if(letter === wordArray[i].lettersArray[j].letter){
                        wordArray[i].lettersArray[j].isCorrect = true
                        currentStatus += wordArray[i].lettersArray[j].result()
                        currentStatus += ' '
                        newGame.letterLeftToGuess -= 1
                        flag = 1
                    } else {
                        currentStatus += wordArray[i].lettersArray[j].result()
                        currentStatus += ' '
                    }
                }
                currentStatus += ' '
            }
            console.log(currentStatus)
            
            if(flag === 1){
                console.log("\nCorrect!\n")
                console.log("Letter Left to guess: " + newGame.letterLeftToGuess)
                //newGame.letterLeftToGuess -= duplicate
                if(newGame.letterLeftToGuess === 0){
                    newGame.resultOfTheGuess()
                    //wordArray = []
                    //StartNewGame()
                    return
                }
            } else {
                console.log("\nYou've got wrong!\n")
                if (newGame.totalGuess > 0){
                    newGame.totalGuess -= 1
                    if(newGame.totalGuess === 0){
                        newGame.resultOfTheGuess()
                        //wordArray = []
                        //StartNewGame()
                        return
                    } else {
                        console.log("\n" + newGame.totalGuess + " guesses remaining\n")
                    }
                    
                }
                
            }
            
            recursiveInquirer()
            
        })
        
    }
    StartGame()
}

StartNewGame()

