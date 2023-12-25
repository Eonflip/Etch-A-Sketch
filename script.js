const colorSelector = document.getElementById('colorSelect');
const colorButton = document.getElementById('colorButton');
const rainbowButton = document.getElementById('rainbowButton');
const clearButton = document.getElementById('clearButton');
const sizeSlider = document.getElementById('sizeSlider');
const sliderValueDisplay = document.getElementById('sliderValue');
const container = document.getElementById('squaresContainer');
let isMouseDown = false;

function createGrid(size) {

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

function setupDrawing () {
    container.addEventListener('mousedown', (event) => {
        isMouseDown = true; 
        if (event.target.className == 'cell') {
            event.target.style.background = 'black';
        }
    }, false);

    container.addEventListener('mouseup', function() {
        isMouseDown = false;
    }, false);

    container.addEventListener('mouseover', (event) => {
        if (isMouseDown && event.target.className === "cell") {
            event.target.style.background = "black";
        }
    }, false);

    container.addEventListener("dragstart", function(event) {
        event.preventDefault();
    }, false);
}

clearButton.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.background = 'white';
    });
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.id === 'clearButton') {
            return;
        }
        document.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));

        this.classList.add('selected');

    })
})



setupDrawing();