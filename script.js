let css = document.querySelector('#random1');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let div1 = document.getElementById("gradient");

let css2 = document.getElementById('random2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
let randomButton = document.getElementById('randomButton1');
let div2 = document.getElementById("gradient2");



let css3 = document.getElementById('random3');
let color5 = document.getElementById('color5');
let color6 = document.getElementById('color6');
let randomButton2 = document.getElementById('randomButton2');
let div3 = document.getElementById("gradient3");


let css4 = document.getElementById('random4');
let color7 = document.getElementById('color7');
let color8 = document.getElementById('color8');
let randomButton3 = document.getElementById('randomButton3');
let div4 = document.getElementById('gradient4');


// div1 
function setGradient1() {
    div1.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = div1.style.background + ";";
}

color1.addEventListener("input", setGradient1);
color2.addEventListener("input", setGradient1);
// div1 ending







// Function to generate a random color div 2
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Function to set the gradient background and input values
const setGradient = (color3Value, color4Value) => {
    div2.style.background = `linear-gradient(to right, ${color3Value}, ${color4Value})`;
    color3.value = color3Value;
    color4.value = color4Value;
};

// Set initial background and input values
// const initialColor1 = '#ff0000';
// const initialColor2 = '#0000ff';
// setGradient(initialColor1, initialColor2);

// Update background when color inputs change
color3.addEventListener('input', () => {
    setGradient(color3.value, color4.value);
});

color4.addEventListener('input', () => {
    setGradient(color3.value, color4.value);
});

// Generate random colors and set the gradient when random button is clicked
randomButton.addEventListener('click', () => {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    setGradient(randomColor1, randomColor2);
    css2.textContent = div2.style.background + ";";
});
// div 2




// div3
const getRandomColor2 = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const setGradient3 = (color5Value, color6Value) => {
    div3.style.background = `linear-gradient(to right, ${color5Value}, ${color6Value})`;
    color5.value = color5Value;
    color6.value = color6Value;
};

// const initialColor5 = '#ff0000';
// const initialColor6 = '#0000ff';
// setGradient3(initialColor5, initialColor6);

color5.addEventListener('input', () => {
    setGradient3(color5.value, color6.value);
});

color6.addEventListener('input', () => {
    setGradient3(color5.value, color6.value);
});

randomButton2.addEventListener('click', () => {
    const randomColor5 = getRandomColor2();
    const randomColor6 = getRandomColor2();
    setGradient3(randomColor5, randomColor6);
    css3.textContent = div3.style.background + ";";
});

// div3 ending


// div4 starts

// const getRandomColor4 = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color
// };


// const setGradient4 = (color7Value, color8Value) => {
//     div4.style.background = `linear-gradient(to right, ${color7Value}, ${color8Value})`;
//     color7.value = color7Value;
//     color8.value = color8Value;
// };

// // const initialColor7 = '#ff0000';
// // const initialColor8 = '#0000ff';
// // setGradient4(initialColor7, initialColor8);

// color7.addEventListener('input', () => {
//     setGradient4(color7.value, color8.value);
// });

// color8.addEventListener('input', () => {
//     setGradient4(color7.value, color8.value);
// });

// randomButton3.addEventListener('click', () => {
//     const randomColor7 = getRandomColor4();
//     const randomColor8 = getRandomColor4();
//     setGradient4(randomColor7, randomColor8);
//     css4.textContent = div4.style.background + ";";
// });


// div4 repeat for good

function getRandomColor4() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


function setGradient4(color7Value, color8Value) {
    div4.style.background = `linear-gradient(to right, ${color7Value}, ${color8Value})`;
    color7.value = color7Value;
    color8.value = color8Value;
};

const initialColor7 = '#ff0000';
const initialColor8 = '#0000ff';
setGradient4(initialColor7, initialColor8);

color7.addEventListener("input", function () {
    setGradient4(color7.value, color8.value);
    css4.textContent = div4.style.background + ";";
});

color8.addEventListener("input", function () {
    setGradient4(color7.value, color8.value);
    css4.textContent = div4.style.background + ";";
});

randomButton3.addEventListener('click', function () {
    const randomColor7 = getRandomColor4();
    const randomColor8 = getRandomColor4();
    setGradient4(randomColor7, randomColor8);
    css4.textContent = div4.style.background + ";";
});






