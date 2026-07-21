const container = document.querySelector("#container");
const MAX_SIZE = 100;
const DEFAULT_SIZE = 16;


let numSquares = DEFAULT_SIZE;


function createGrid() {
    for(let i = 0; i < numSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        for(let j = 0; j < numSquares; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.backgroundColor = setColor();
            
            square.style.opacity = 0;
            div.appendChild(square);
        }
        container.appendChild(div);
    }
}


function clearGrid() {
    const grid = document.querySelectorAll(".row");
    grid.forEach(row => row.remove());
}


function setColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);

    const output = `hsl(${hue} ${saturation}% ${lightness}%)`;
    return output;
}


function highlight(square) {
    let opacity = Number(square.style.opacity);
    if (opacity < 1) opacity += 0.1;

    square.style.opacity = opacity;
}



// Adding the event listener to the container instead of 
// each square improves website performance
container.addEventListener("mouseover", (e) => {
    const square = e.target;
    if(square.classList.contains("square")) {
        highlight(square);
    }
});


const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    numSquares = Number(prompt("How many squares wide should the grid be?"));
    if (numSquares > MAX_SIZE) {
        numSquares = MAX_SIZE;
    }
    if (Number.isNaN(numSquares) || numSquares <= 0) {
        numSquares = DEFAULT_SIZE
    }
    clearGrid();
    createGrid();
});


createGrid();
