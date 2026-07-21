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
            div.appendChild(square);
        }
        container.appendChild(div);
    }
}

function clearGrid() {
    const grid = document.querySelectorAll(".row");
    grid.forEach(row => row.remove());
}


function highlight(square) {
    square.style.backgroundColor = "black";
}

createGrid();

// Adding the event listener to the container instead of 
// each square improves website performance
container.addEventListener("mouseover", (e) => {
    const square = e.target;
    // console.log(square.classList)
    console.log(`target: ${square.classList}`);
    if(square.classList.contains("square")) {
        highlight(square);
    }
});


const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    numSquares = Number(prompt("How many squares wide should the grid be?"));
    console.log(numSquares, typeof numSquares);
    if (numSquares > MAX_SIZE) {
        numSquares = MAX_SIZE;
    }
    if (Number.isNaN(numSquares) || numSquares <= 0) {
        numSquares = DEFAULT_SIZE
    }
    console.log(numSquares, typeof numSquares);
    clearGrid();
    createGrid();
})