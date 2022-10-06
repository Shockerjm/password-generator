let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const p1El = document.querySelector("#p1-el")
const p2El = document.querySelector("#p2-el")
const passwordContainer = document.querySelector("#password-container")
const numEl = document.querySelector("#num-chars")
const numToggle = document.querySelector("#numbers")
const symToggle = document.querySelector("#symbols")

let isVisible = false;

function generatePassword() {
    let password1 = [];
    let password2 = [];   
    isVisible = true;
    
    if(isVisible === true) {
        passwordContainer.style.display = "flex"
        passwordContainer.style.visibility = "visible"
    } else {
        passwordContainer.style.display = "none"
        passwordContainer.style.visibility = "hidden"
    }
    
    if (numEl.value === "") {
        for (let i = 0; i < 16; i++) {
            let ran1 = Math.floor(Math.random() * characters.length)
            let ran2 = Math.floor(Math.random() * characters.length)
            password1.push(characters[ran1])
            password2.push(characters[ran2])
        } 
    } else {
            for (let i = 0; i < numEl.value; i++) {
                let ran1 = Math.floor(Math.random() * characters.length)
                let ran2 = Math.floor(Math.random() * characters.length)
                password1.push(characters[ran1])
                password2.push(characters[ran2])
            } 
    }
    
    p1El.textContent = password1.join('')
    p2El.textContent = password2.join('')
    
}

function copyPassword(id) {
    let el = document.getElementById(id)
    window.getSelection().selectAllChildren(el)
    document.execCommand("Copy")
}

numToggle.addEventListener('click', function() {
    if (numToggle.checked === true) {
        characters.push(...numbers)
    } else {
        characters = characters.filter(val => !numbers.includes(val))
    }
})

symToggle.addEventListener('click', function() {
    if (symToggle.checked === true) {
        characters.push(...symbols)
    } else {
        characters = characters.filter(val => !symbols.includes(val))
    }
})



