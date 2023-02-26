function createGrid(size) {
    const grid = document.querySelector('.grid');
    // make a certain amount of row
    for (let r = 0; r < size; r++) {
        let newRow = document.createElement('div');
        newRow.classList.add("row");
        for (let c = 0; c < size; c++) {
            let newBlock = document.createElement('div');
            newBlock.classList.add("block");
            newBlock.addEventListener("mouseover", () => {
                console.log("here")
                newBlock.classList.add("dark");
            })
            newRow.appendChild(newBlock);
        }
        grid.append(newRow);
    }
}

createGrid(16);

// to clear
const clearButton = document.querySelector(".clear");
console.log(clearButton)
clearButton.addEventListener("click", () => {
    // get all the block
    const allBlocks = document.querySelectorAll(".block");
    [...allBlocks].map(block => {
        block.classList.remove("dark");
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
    console.log("finsihed")
})