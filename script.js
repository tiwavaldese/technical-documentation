let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function(){
    let code = copyText.querySelector("code.text");
    code.select();
document.executeCommand("copy");
copyText.classList.add("active");
window.getSelection().removeAllRanges();
setTimeout(function(){
    copyText.classList.remove("active");
}, 2500 )
})

