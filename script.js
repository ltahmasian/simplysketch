let color = 'black'; //default color
let click = true;

let colorPallete = document.getElementById("color-input");
colorPallete.addEventListener('change', () => {
color = colorPallete.value; //each time color pallete changes, color variable changes as well
})

function changeColor(choice){ //created this function for everytime user selects erase
    color = choice;
}

function populateBoard(size){ //first, creating the rows * columns inside our canvas
    let canvas = document.querySelector('.canvas');
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < 2704; i++) { //then, using a loop to fill in our canvas with our selected color each time we hover over one of the small divs we made,
        let square = document.createElement('div');
        square.addEventListener("mouseover", () => {
        if(click == true){
            square.style.backgroundColor = color;
            }
        })
        canvas.insertAdjacentElement('beforeend', square);
    } 
}

function changeSize(input){ //changes the size to user input (either small, medium, or large)
    resetBoard();
    populateBoard(input);
}

function resetBoard(){ //removes all the divs from our canvas
    let canvas = document.querySelector(".canvas");
    let squares = canvas.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('.canvas').addEventListener("click", () => {
    click = !click;
})