
let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function(){
    let input= copyText.querySelector(".text");
   input.focus();
   document.execCommand("copy");
copyText.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copyText.classList.remove("active");
}, 2500 )
})


let copyText1 = document.querySelector(".copy");
copyText1.querySelector("button").addEventListener("click", function(){
    let input= copyText1.querySelector(".text");
   input.focus();
   document.execCommand("copy");
copyText1.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copyText1.classList.remove("active");
}, 2500 )
})

let copyText2 = document.querySelector(".copied");
copyText2.querySelector("button").addEventListener("click", function(){
    let input= copyText2.querySelector(".text");
   input.focus();
   document.execCommand("copy");
copyText2.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copyText2.classList.remove("active");
}, 2500 )
})


let copyText3= document.querySelector(".copying");
copyText3.querySelector("button").addEventListener("click", function(){
    let input= copyText3.querySelector(".text");
   input.focus();
   document.execCommand("copy");
copyText3.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copyText3.classList.remove("active");
}, 2500 )
})


let copyText4= document.querySelector(".copies");
copyText4.querySelector("button").addEventListener("click", function(){
    let input= copyText4.querySelector(".text");
   input.focus();
   document.execCommand("copy");
copyText4.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copyText4.classList.remove("active");
}, 2500 )
})

let copyText5= document.querySelector(".copie");
copyText5.querySelector("button").addEventListener("click", function(){
    let input= copyText5.querySelector(".text");
   input.focus();
   document.execCommand("copy");
copyText5.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copyText5.classList.remove("active");
}, 2500 )
})


let copyText6= document.querySelector(".copy-txt");
copyText6.querySelector("button").addEventListener("click", function(){
    let input= copyText6.querySelector(".text");
   input.focus();
   document.execCommand("copy");
copyText6.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copyText6.classList.remove("active");
}, 2500 )
})

let copyText7= document.querySelector(".copied-txt");
copyText7.querySelector("button").addEventListener("click", function(){
    let input= copyText7.querySelector(".text");
   input.focus();
   document.execCommand("copy");
copyText7.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copyText7.classList.remove("active");
}, 2500 )
})
