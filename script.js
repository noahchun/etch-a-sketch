const container = document.querySelector(".grid-container");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            square.textContent = "1";
            container.appendChild(square);
        }
    }
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square => square.addEventListener('mouseover', squareEntered));
}

function squareEntered(e) {
    this.classList.add('hovered');
}

createGrid();




