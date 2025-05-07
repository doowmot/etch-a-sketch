const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
document.body.appendChild(gridContainer);

function createGrid() {
    for (let i = 1; i <= 256; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid-square");
        gridContainer.appendChild(newDiv);
    
        newDiv.addEventListener("mouseover", function() {
            newDiv.classList.add("on-mouse-over");
    });
    }
}

createGrid();