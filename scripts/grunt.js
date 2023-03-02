class Grunt {
    constructor(gameBoard) {
        this.SPEED = 10;
        this.pace = 1;
        this.node = document.createElement('div');
        this.node.setAttribute('class', 'gruntDiv');

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const randomTop = (Math.floor(Math.random() * viewportHeight));
        const randomLeft = (Math.floor(Math.random() * viewportWidth));

        this.node.style.top = `${randomTop}px`;
        this.node.style.left = `${randomLeft}px`;
        //created a new image element and added it to the 'grunt' div
        const img = document.createElement('img');
        img.className = 'gruntImg'
        img.src = chrome.runtime.getURL('/images/grunt.png');
        this.node.appendChild(img);
        
        gameBoard.appendChild(this.node);
        setTimeout(this.move.bind(this), this.SPEED);
    }

    move() {
        setTimeout(this.move.bind(this), this.SPEED);

        // Get Grunt Position //
        const gruntTag = this.node;

        let topPosition = Number(gruntTag.style.top.replace('px', ''));
        let leftPosition = Number(gruntTag.style.left.replace('px', ''));



        // Move Head //
        if (leftPosition > mousePos.x) {
            gruntTag.style.left = `${(leftPosition -= this.pace)}px`;
        }
        if (leftPosition < mousePos.x) {
            gruntTag.style.left = `${(leftPosition += this.pace)}px`;
        }
        if (topPosition > mousePos.y) {
            gruntTag.style.top = `${(topPosition -= this.pace)}px`;
        }
        if (topPosition < mousePos.y) {
            gruntTag.style.top = `${(topPosition += this.pace)}px`;
        }

        cursorCheck(this.node);
    }
}

// Cursor Check //
function cursorCheck(gruntEl) {
    // Get Grunt Position //
    const gruntTag = gruntEl;
    let topPosition = Number(gruntTag.style.top.replace('px', ''));
    let leftPosition = Number(gruntTag.style.left.replace('px', ''));
    // Check in Range //

    if ((mousePos.x - leftPosition <= 50 && (leftPosition + 50) - mousePos.x <= 50) && (mousePos.y - topPosition <= 50 && (topPosition + 50) - mousePos.y <= 50)) {
        // // Load Munch Sound //
        // const munchSound = new sound(chrome.runtime.getURL('/sounds/munchSound.mp3'));

        // munchSound.play();
        alert('NO MORE BREAD - You herded ' + score + ' Sheep');
        mousePos.x = 0;
        mousePos.y = 0;
        const allGrunts = document.querySelectorAll('.grunt')
        allGrunts.forEach((grunt) => {
            grunt.remove();
          });
        location.reload();
    }
}

// Create Sound Constructor //
class sound {
    constructor (src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    }
    play() {
        this.sound.play();
    }
    stop() {
        this.sound.pause();
    }
}

// if (snake.body[0].x < 0 || snake.body[0].x >= board.width || snake.body[0].y < 0 || snake.body[0].y >= board.height) {
//     alert('Mental capacity reached');
//     board.board.removeChild(snake.element);
//     location.reload();
// }