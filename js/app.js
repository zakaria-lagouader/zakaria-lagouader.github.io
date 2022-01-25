const modeBtn = document.querySelector(".mode-btn");
const modeBtnIcon = document.querySelector(".mode-btn img");
const root = document.documentElement;

const modes = {
    light: {
        background: "white",
        color: "black"
    },
    dark: {
        background: "#262636",
        color: "#f3f3fa"
    },
}

let currentMode = localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "light";

updateMode(modes[currentMode]);

modeBtn.addEventListener("click", () => {
    currentMode = currentMode === "light" ? "dark" : "light"; 
    const mode = modes[currentMode];
    updateMode(mode)
    localStorage.setItem("currentMode", currentMode);
})

function updateIcon() {
    modeBtnIcon.src = `./img/${currentMode === "light" ? "moon" : "sun"}.webp`;
}

function updateMode(mode) {
    root.style.setProperty('--background', mode.background);
    root.style.setProperty('--color', mode.color);
    updateIcon();
}


