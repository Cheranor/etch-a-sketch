let dim = 20;
let dimInPx = 960;
let cellSize = dimInPx/dim
let color = 'black'

const canvas = document.querySelector('#canvas');
const reset = document.querySelector('#reset');
const blackBtn = document.querySelector('#black');
const rainbowBtn = document.querySelector('#rainbow');

const row = document.createElement('div');

const pixel = document.createElement('div');
pixel.classList.add('pixel')
pixel.style.width = `${cellSize}px`
pixel.style.height = `${cellSize}px`


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


function clearCanvas() {
    pixels.forEach(px => {
        px.style.backgroundColor = 'white';
    });
}




row.classList.add('row');
for (let index = 0; index < dim; index++) {
    row.appendChild(pixel.cloneNode(true));
}

for (let index = 0; index < dim; index++) {
    canvas.appendChild(row.cloneNode(true));
}









let pixels = document.querySelectorAll('.pixel');

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