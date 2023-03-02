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

// Get Mouse Position //
const mousePos = {};
document.addEventListener('mousemove', function (event) {
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
    console.log(mousePos);
});

// Initialize Score //
let score = 0

// Grunt Spawn //
function gruntSpawn (number) {
    for (let i = 0; i < number; i++) {
        const enemy = new Grunt(gameBoard);
        score++;
    }
}


// Click Listener //
startButton.addEventListener('click', function () {
    // Check for User Input //
    if (userInput.value) {
        // Start Game with Value of Sheep
        gruntSpawn(userInput.value);
        setInterval(function() {gruntSpawn(userInput.value)}, 8000);
    } else {
        // Start Game with 1 Sheep 
        gruntSpawn(1);
        setInterval(function() {gruntSpawn(1)}, 8000);
    }
    buttonDiv.remove();
});






















//(Math.floor(Math.random() * board.width)), (Math.floor(Math.random() * board.height))