const colorSelector = document.getElementById('colorSelect');
const colorButton = document.getElementById('colorButton');
const rainbowButton = document.getElementById('rainbowButton');
const clearButton = document.getElementById('clearButton');
const sizeSlider = document.getElementById('sizeSlider');
const sliderValueDisplay = document.getElementById('sliderValue');

function createGrid(size) {
    const container = document.getElementById('squaresContainer');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = 'row';

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }

        container.appendChild(row);
    }

}

sizeSlider.addEventListener('input', function () {
    const size = sizeSlider.value;
    sliderValueDisplay.textContent = size;
});

createGrid(25);