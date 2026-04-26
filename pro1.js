let h1 = document.querySelector("h1");
let keySpan = document.querySelector("#key");
let codeSpan = document.querySelector("#code");
let main = document.querySelector("#main");

window.addEventListener("keydown", function (event) {

    let key = event.key;

    // Handle special keys
    if (key === " ") key = "SPACE";
    else if (key === "Enter") key = "ENTER";
    else if (key === "Backspace") key = "BACKSPACE";
    else key = key.toUpperCase();

    // Update UI
    h1.textContent = key;
    keySpan.textContent = key;
    codeSpan.textContent = event.code;

    // Random background color
    let randomHue = Math.floor(Math.random() * 360);
    main.style.backgroundColor = `hsl(${randomHue}, 40%, 15%)`;

    // Add animation
    h1.classList.add("animate");

    setTimeout(() => {
        h1.classList.remove("animate");
    }, 150);
});