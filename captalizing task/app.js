

var text = prompt("Enter your text")

var word = text.split(" ")

for(let i = 0; i < word.length; i++) {

    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    
}let result = word.join(" ")

document.write(result)