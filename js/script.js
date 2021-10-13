const button = document.querySelector("#button");
const textArea = document.querySelector('#randomText');
const input = document.querySelector('#input');
const noun = ["man", "woman", "teacher", "John", "Mary", "home", "office", "town", "countryside", "America", "table", "car", "banana", "money", "music", "love", "dog", "monkey"];
const verb = ["go","sing","manage","stood","ran","sitting","think","went","speak","throw","smell","impeed","tolerate","surprise","stink","survived","tell","stand","finish"];

function randomWords(){
    let index = Math.floor(Math.random()*noun.length);
    textArea.innerHTML+=verb[index] + " " + noun[index];
}

button.addEventListener('click', () => {

    if(input.value==="") {
        for(let i = 0; i < 9; i++) {
            randomWords();
        }
    }
    else {
    for(let i = 0; i < input.value; i++) {
        for(let i = 0; i < 9; i++) {
            randomWords();
        }
    }}
})

