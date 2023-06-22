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

createGridWithSize(16);

function createGridWithSize(size) {
    document.getElementsByClassName("grid-container")[0].innerHTML = ""; // Clear the grid container

    const containerWidth = 650; // Get the width of the container
    const squareSize = containerWidth / size; // Calculate the width/height of each grid item

    container.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`; // template literal that creates a grid of width squareSize, "size" number of times
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            square.textContent = "1";
            container.appendChild(square);
        }
    }
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square => {
        square.style.width = squareSize + 'px'; 
        square.style.height = squareSize + 'px'; 
    });
    squares.forEach(square => square.addEventListener('mouseover', squareEntered));
}

const changeSizeButton = document.querySelector('button');
changeSizeButton.addEventListener('click', ()=>{
    let input = prompt("How many squares per side?");
    createGridWithSize(input);
});






