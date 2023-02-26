function createGrid(size) {
    const gridArea = document.querySelector('.grid-area');
    let grid = document.createElement('div')
    grid.classList.add('grid');
    // make a certain amount of row
    for (let r = 0; r < size; r++) {
        let newRow = document.createElement('div');
        newRow.classList.add("row");
        for (let c = 0; c < size; c++) {
            let newBlock = document.createElement('div');
            newBlock.classList.add("block");
            newBlock.onmouseover = () =>{
                console.log(newBlock);
                newBlock.style.background = "black";
            }
            newRow.appendChild(newBlock);
        }
        grid.appendChild(newRow);
    }
    gridArea.appendChild(grid);
}

createGrid(16);

// to clear
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    // get all the block
    const allBlocks = document.querySelectorAll(".block");
    [...allBlocks].map(block => {
        block.style.background = "white";
    });
})

// for the slider
const sizeSlider = document.querySelector(".size-slider");
const sliderLabel = document.querySelector(".slider-label");
sizeSlider.addEventListener("input", () => {
    // change the text on input
    sliderLabel.textContent = sizeSlider.value + " x " + sizeSlider.value
})

sizeSlider.addEventListener("change", () => {
    // change the grid size once the user is done scrolling
    // delete the old grid and just make a new one
    const gridArea = document.querySelector('.grid-area');
    const grid = document.querySelector('.grid')
    gridArea.removeChild(grid);
    createGrid(sizeSlider.value);
})

// change to black mode
const blackModeButton = document.querySelector(".black-mode")
blackModeButton.addEventListener('click', ()=> {
    // get the 
    const allBlocks = document.querySelectorAll(".block");
    [...allBlocks].map(block => {
        block.onmouseover = () => {
            block.style.background = "black";
        };
    });
})

const rainbowModeButton = document.querySelector(".rainbow-mode")
rainbowModeButton.addEventListener('click', ()=> {
    // get the 
    const allBlocks = document.querySelectorAll(".block");
    [...allBlocks].map(block => {
        // change the onmouseover to rainbow
        block.onmouseover = () => {
            // get random red
            let red = Math.floor(Math.random() * 255 + 1);
            let green = Math.floor(Math.random() * 255 + 1);
            let blue = Math.floor(Math.random() * 255 + 1);
            block.style.background = `rgb(${red},${green}, ${blue})`;
        };
    });
})
