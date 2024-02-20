let text = document.getElementById("text");
let content = document.getElementById("content");
text.addEventListener("input", function (event) {
    content.textContent = 'Text: ' + event.target.value;
})