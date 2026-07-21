const container = document.querySelector("#container");

let numSquares = 16;


function init() {

    for(let i = 0; i < numSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        for(let j = 0; j < numSquares; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            div.appendChild(square);
            console.log(square.classList)
        }
        container.appendChild(div);
    }
}

init();
// console.log(container.childNodes)