const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for (let i = 1; i <= 256; i++) {
   let newDiv = document.createElement("div");
   newDiv.classList.add("grid-square");
   container.appendChild(newDiv);

}

