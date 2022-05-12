const text = ['Nice to Meet You'];
let count= 0;
let index = '0';
let current = '';
let words = '';

(function ketik(){
    if(count == text.length){
        count = 0;
    }
    current = text[count];
    words = current.slice(0, ++index);
    console.log(words);
    document.querySelector(".efek").textContent= words;
    setTimeout(ketik, 500);

    if(words.length == current.length){
        index=0;
    }
})();
