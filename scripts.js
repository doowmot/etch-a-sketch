const gridSizeBtn = document.getElementById('grid-size-btn');
const clearBtn = document.getElementById('clear-btn');
const gridContainer = document.getElementById("grid-container")

function createSquare(squareSize) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    newSquare.style.width = squareSize + "px";
    newSquare.style.height = squareSize + "px";
    return newSquare;
}

function setupSquareEvents(square) {
    square.addEventListener("mouseover", function() {
        square.classList.add("on-mouse-over");
    });
}

function createGrid(size) {
    if (!size) {
        size = 16;
    }
    
    let totalSquares = size * size;
    let squareSize = 960 / size;
    
    gridContainer.innerHTML = "";
    
    for (let i = 1; i <= totalSquares; i++) {
        let newSquare = createSquare(squareSize);
        gridContainer.appendChild(newSquare);
        setupSquareEvents(newSquare);
    }
}

function createGridSizeBtn() {
    gridSizeBtn.onclick = function() {
        let gridSize = prompt("Please select a grid size from 1-100: ");
        
        if (gridSize > 0 && gridSize <= 100) {
            createGrid(gridSize);
        } else {
            alert("Please enter a valid number: ");
        }
    };
}

function clearGrid() {
    clearBtn.onclick = function() {
        gridContainer.innerHTML = "";
        createGrid();
    };
}

function initApp() {
    createGridSizeBtn();
    createGrid();
    clearGrid();
}

initApp();