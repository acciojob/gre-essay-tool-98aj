//your code here
let inp = document.createElement('input');
inp.setAttribute('id', 'evaluatedText');
document.body.append(inp);

let head = document.createElement('h3');
head.setAttribute('id', 'wordCount');
document.body.append(head)

let textct = document.getElementById('evaluatedText')
let text = document.getElementById('wordCount')

text.innerHTML = textct.value.length;

textct.addEventListener('input', cal)



function cal(){
    text.innerHTML = textct.value.length;
}
