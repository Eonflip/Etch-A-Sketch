
//DOM Elements to each button/input/squares grid for drawing
const colorSelector = document.getElementById('colorInput');
const colorButton = document.getElementById('colorSelect');
const rainbowButton = document.getElementById('rainbowSelect');
const eraseButton = document.getElementById('eraseSelect');
const clearButton = document.getElementById('clearButton');
const sizeSlider = document.getElementById('sizeSlider');
const sliderValueDisplay = document.getElementById('sliderValue');
const container = document.getElementById('squaresContainer');


//Set Default Values so that the etch-a-sketch has a default state
let isMouseDown = false;
const DEFAULT_COLOR = 'rgb(0, 0, 0)';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;


//add event listeners to change the mode the etch-a-sketch is set in
colorButton.addEventListener('click', function() {
    currentMode = 'color';
});

rainbowButton.addEventListener('click', function() {
    currentMode = 'rainbow';
});

eraseButton.addEventListener('click', function() {
    currentMode = 'erase';
})
//This one handles the color when setting the value of the color input field
colorSelector.addEventListener('input', function() {
    currentColor = colorSelector.value;
});



//setup a function to handle each different mode depeneding on the button selected
function drawMode(cell) {

    let randR = Math.floor(Math.random() * 256);
    let randG = Math.floor(Math.random() * 256);
    let randB = Math.floor(Math.random() * 256);

    if (isMouseDown === true && cell.className === "cell") {
        switch (currentMode) {
            case 'color':
                cell.style.background = currentColor;
                break;
            case 'rainbow':
                cell.style.background = `rgb(${randR}, ${randG}, ${randB})`;
                break;
            case 'erase':
                cell.style.background = 'white'; // Or whatever your background color is
                break;
        }
    }
}


//Create a grid depending on the size of the sizeSlider element
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
    sliderValueDisplay.textContent = size + " x " + size;
    createGrid(size);
    setupDrawing();
});



function setupDrawing () {
    container.addEventListener('mousedown', (event) => {
        isMouseDown = true; 
        drawMode(event.target);
    }, false);

    document.addEventListener('mouseup', function() {
        isMouseDown = false;
    }, false);

    container.addEventListener('mouseover', (event) => {
        drawMode(event.target);
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


createGrid(DEFAULT_SIZE);
setupDrawing();

window.onload = () => {
    colorButton.classList.add('selected');
}