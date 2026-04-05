export function typingEffect(words, elementId){

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type(){

let currentWord = words[wordIndex];
let element = document.getElementById(elementId);

if(!element) return;

if(!isDeleting){

element.textContent = currentWord.substring(0,charIndex+1);
charIndex++;

if(charIndex === currentWord.length){
isDeleting = true;
setTimeout(type,1200);
return;
}

}

else{

element.textContent = currentWord.substring(0,charIndex-1);
charIndex--;

if(charIndex === 0){
isDeleting = false;
wordIndex = (wordIndex+1) % words.length;
}

}

setTimeout(type,isDeleting ? 70 : 120);

}

type();

}