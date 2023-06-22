const container = document.querySelector(".grid-container");

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 

function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            container.appendChild(square);
        }
    }
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square => square.addEventListener('mouseover', function(){
        square.style.backgroundColor = randomColor();
    }));
}

// function squareEntered(e) {
//     this.classList.add('hovered');
// }

function createGridWithSize(size) {
    document.getElementsByClassName("grid-container")[0].innerHTML = ""; // Clear the grid container

    const containerWidth = 650; // Get the width of the container
    const squareSize = containerWidth / size; // Calculate the width/height of each grid item

    container.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`; // template literal that creates a grid of width squareSize, "size" number of times
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            container.appendChild(square);
        }
    }
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square => {
        square.style.width = squareSize + 'px'; 
        square.style.height = squareSize + 'px'; 
    });
    squares.forEach(square => square.addEventListener('mouseover', function(){
        square.style.backgroundColor = randomColor();
    }));
}

const changeSizeButton = document.querySelector('button');
changeSizeButton.addEventListener('click', ()=>{
    let input = prompt("How many squares per side?");
    if (input > 100) {
        alert("Try not to exceed 100 sides!");
        return;
    }
    createGridWithSize(input);
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', ()=>{
    const squares = document.querySelectorAll('.grid-item');
    squares.forEach(square => square.style.backgroundColor = 'white');
});

createGridWithSize(16);







