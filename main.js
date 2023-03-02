// Intialize Game Board //
const gameBoard = document.createElement('div');
gameBoard.className = 'gameBoard';
document.body.appendChild(gameBoard);
console.log(gameBoard);

// Create Button Div //
const buttonDiv = document.createElement('div');
buttonDiv.className = 'buttonDiv';
const startButton = document.createElement('button');
const userInput = document.createElement('input');
userInput.className = 'userInput';
userInput.placeholder = '# of Sheep'
startButton.className = 'startButton';
startButton.innerText = 'GIVE ME SHEEP';
buttonDiv.append(userInput);
buttonDiv.append(startButton);
gameBoard.append(buttonDiv);
console.log(buttonDiv);

// Create Bread Div //
const breadDiv = document.createElement('div');
breadDiv.setAttribute('class', 'breadDiv');
const breadImg = document.createElement('img');
breadImg.className = 'breadImg'
breadImg.src = chrome.runtime.getURL('/images/bread.png');
breadDiv.appendChild(breadImg);
gameBoard.appendChild(breadDiv);

// // Load Sheep Sound //
// const sheepSound = new sound(chrome.runtime.getURL('/sounds/sheepSound.mp3'));

// // Load Munch Sound //trying the munch audio again
// const munchSound = new sound(chrome.runtime.getURL('/sounds/munchSound.mp3'));
// let munchSound = new Audio();
// munchSound.src = chrome.runtime.getURL('/sounds/munchSound.mp3');


// Get Mouse Position //
const mousePos = {};
document.addEventListener('mousemove', function (event) {
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;

    // Move Bread to MousePos //
    breadDiv.style.left = `${mousePos.x}px`;
    breadDiv.style.top = `${mousePos.y}px`;
});

// Initialize Score //
let score = 0

// Grunt Spawn //
function gruntSpawn(number) {
    for (let i = 0; i < number; i++) {
        const enemy = new Grunt(gameBoard);
        score++;
    }
    // sheepSound.play();
}


// Click Listener //
startButton.addEventListener('click', function () {
    // Check for User Input //
    if (userInput.value) {
        // Start Game with Value of Sheep
        gruntSpawn(userInput.value);
        setInterval(function () { gruntSpawn(userInput.value) }, 6000);
    } else {
        // Start Game with 1 Sheep 
        gruntSpawn(1);
        setInterval(function () { gruntSpawn(1) }, 6000);
    }
    buttonDiv.remove();
});






















//(Math.floor(Math.random() * board.width)), (Math.floor(Math.random() * board.height))