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
    modeBtnIcon.src = `/img/${currentMode === "light" ? "moon" : "sun"}.png`;
}

function updateMode(mode) {
    root.style.setProperty('--background', mode.background);
    root.style.setProperty('--color', mode.color);
    updateIcon();
}

if (window.innerWidth >= 992) {
    // circle animation
    anime({
       targets: '#circle',
       scale: [0, 1],
       duration: 1000,
       delay: 200,
   }).finished.then(() => {
       anime({
           targets: '#circle',
           translateX: [-10, 10, -10, 10],
           translateY: [-10, 10, 10, -10],
           easing: 'easeInOutSine',
           duration: 10000,
           loop: true,
           direction: 'alternate',
       });
   })
   // rect animation
   anime({
       targets: '#rect',
       scale: [0, 1],
       duration: 1000,
       
   }).finished.then(() => {
       anime({
           targets: '#rect',
           translateX: [15, -15, 15, -15],
           translateY: [15, -15, -15, 15],
           easing: 'easeInOutSine',
           duration: 9000,
           loop: true,
           direction: 'alternate',
           rotate: 10
       });
   })
   // triangle animation
   anime({
       targets: '#trian',
       scale: [0, 1],
       duration: 1000,
       delay: 400,
   }).finished.then(() => {
       anime({
           targets: '#trian',
           translateX: [-5, 5, -5, 5],
           translateY: [-5, 5, 5, -5],
           easing: 'easeInOutSine',
           duration: 8000,
           loop: true,
           direction: 'alternate',
           rotate: -20
       });
   
   })
   anime({
       targets: ['.content h1', ".content p"],
       translateX: [-1000, 0],
       opacity: [0, 1],
       easing: 'easeOutExpo',
       duration: 1200,
       delay: 1000
   });
   anime({
       targets: ["header", '#showcase .btn', '.vertical_text'],
       opacity: [0, 1],
       easing: 'easeOutExpo',
       duration: 1200,
       delay: 1200
   });
}