const container = document.querySelector("#container");

let numSquares = 16;


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

function highlight(square) {
    square.style.backgroundColor = "black";
}

createGrid();

container.addEventListener("mouseover", (e) => {
    const square = e.target;
    // console.log(square.classList)
    console.log(`target: ${square.classList}`);
    if(square.classList.contains("square")) {
        highlight(square);
    }
});