const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const generateBtn = document.getElementById("generateBtn")
const passOneEl = document.getElementById("passOne")
const passTwoEl = document.getElementById("passTwo")
const radioButtons = document.querySelectorAll('input[name="passLength"]')
const checkboxSymbols = document.getElementById("symbols")
const checkboxDigits = document.getElementById("digits")

let arrLength = characters.length
console.log(arrLength)

generateBtn.addEventListener("click", generatePasswords)
passOneEl.addEventListener("click", function() {
    if (passOneEl.textContent) {
        navigator.clipboard.writeText(passOneEl.textContent)
        alert("Copied the text: " + passOneEl.textContent)
    }
})
passTwoEl.addEventListener("click", function() {
    if (passOneEl.textContent) {
        navigator.clipboard.writeText(passTwoEl.textContent)
        alert("Copied the text: " + passTwoEl.textContent)
    }
})

function generatePasswords() {
    let resultArray = characters
    let passOne = ""
    let passTwo = ""
    let passScope = 90

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            passLength = radioButton.value;
          break;
        }
    }

    let isSymbolsHere = checkboxSymbols.checked
    let isDigitsHere = checkboxDigits.checked

    if (!isDigitsHere) {
        if (isSymbolsHere) {
            resultArray = characters.slice(0, 52).concat(characters.slice(62))
            passScope = 80
        } else {
            passScope = 52
        }
    } else {
        if (!isSymbolsHere) {
            passScope = 62
        }
    }

    // console.log("symbols, " + isSymbolsHere)
    // console.log("digits, " + isDigitsHere)
    // console.log("pass scope: " + passScope)
    // console.log("1: " + resultArray)
    // console.log("2: " + resultArray[passScope])


    for (let i = 0; i < passLength; i++) {
        rand = Math.floor(Math.random()*passScope)
        passOne += resultArray[rand]
        rand = Math.floor(Math.random()*passScope)
        passTwo += resultArray[rand]
    }

    passOneEl.textContent = passOne
    passTwoEl.textContent = passTwo
}