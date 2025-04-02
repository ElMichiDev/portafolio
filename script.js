document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U" || event.key === "s" || event.key === "S" || event.key === "i" || event.key === "I" || event.key === "j" || event.key === "J" || (event.shiftKey && event.key === "C") || (event.shiftKey && event.key === "I"))) {
        event.preventDefault();
        window.location.href = "https://elmichidev.github.io/404/";
    }
});
