function createGrid(size) {
    console.log("hello world");
    const grid = document.querySelector('.grid');
    console.log(grid);
    // make a certain amount of row
    for (let r = 0; r < size; r++) {
        let newRow = document.createElement('div');
        newRow.classList.add("row");
        for (let c = 0; c < size; c++) {
            let newBlock = document.createElement('div');
            newBlock.classList.add("block");
            newRow.appendChild(newBlock);
        }
        grid.append(newRow);
    }
}

createGrid(16);