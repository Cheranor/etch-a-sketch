const dimInPx = 960;

let color = 'black'
let pixels = document.querySelectorAll('.pixel');

const canvas = document.querySelector('#canvas');
const reset = document.querySelector('#reset');
const blackBtn = document.querySelector('#black');
const rainbowBtn = document.querySelector('#rainbow');
const resizeBtn = document.querySelector('#resize')
const dimInputFld = document.querySelector('#dimInput')


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function blacken(pixel) {
    pixel.style.backgroundColor = 'black';
}


function rainbow(pixel) {
    let red = getRandomInt(256);
    let green = getRandomInt(256);
    let blue = getRandomInt(256);

    pixel.style.backgroundColor = `rgb(${red},${green},${blue})`;
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clearCanvas() {
    pixels.forEach(px => {
        px.style.backgroundColor = 'white';
    });
}


function drawCanvas(dim) {
    let cellSize = dimInPx/dim

    const row = document.createElement('div');

    const pixel = document.createElement('div');
    pixel.classList.add('pixel')
    pixel.style.width = `${cellSize}px`
    pixel.style.height = `${cellSize}px`

    removeAllChildNodes(canvas);

    row.classList.add('row');
    for (let index = 0; index < dim; index++) {
        row.appendChild(pixel.cloneNode(true));
    }

    for (let index = 0; index < dim; index++) {
        canvas.appendChild(row.cloneNode(true));
    }

    pixels = document.querySelectorAll('.pixel');
    console.log(pixels)

    pixels.forEach((px) => {
        px.addEventListener('mouseover', () => {
            switch (color) {
                case 'rainbow':
                    rainbow(px)
                    break;
    
                default:
                    blacken(px);
                    break;
            }
        })
    })
}


function isValidDimInput(dimInput) {
    let isValid = false
    if (! isNaN(dimInput)) {
        if ((dimInput >= 4) && (dimInput <= 100)) {
            isValid = true;
        }
    }

    return isValid;
}

drawCanvas(20);


reset.addEventListener('click', () =>{
    clearCanvas();
})

blackBtn.addEventListener('click', () => {
    clearCanvas();
    color = 'black';
    blackBtn.disabled=true;
    rainbowBtn.disabled=false;
})

rainbowBtn.addEventListener('click', () => {
    clearCanvas();
    color = 'rainbow';
    blackBtn.disabled=false;
    rainbowBtn.disabled=true;
})

resizeBtn.addEventListener('click', () => {
    if (isValidDimInput(dimInputFld.value)) {
        drawCanvas(Number(dimInputFld.value))
    }
})