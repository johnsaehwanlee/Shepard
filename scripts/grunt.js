class Grunt {
    constructor(gameBoard) {
        this.SPEED = 10;
        this.pace = 1;
        this.node = document.createElement('div');
        // this.node.src = './images/grunt.png';
        this.node.setAttribute('class', 'grunt');

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const randomTop = (Math.floor(Math.random() * viewportHeight));
        const randomLeft = (Math.floor(Math.random() * viewportWidth));
        console.log(gameBoard.style.height)
        console.log(gameBoard.style.width)

        this.node.style.top = `${randomTop}px`;
        this.node.style.left = `${randomLeft}px`;

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
    console.log(leftPosition);
    // Check in Range //

    if ((mousePos.x - leftPosition <= 50 && (leftPosition + 50) - mousePos.x <= 50) && (mousePos.y - topPosition <= 50 && (topPosition + 50) - mousePos.y <= 50)) {
        alert('NO MORE BREAD - You Shepherded ' + score + ' Sheep');
        mousePos.x = 0;
        mousePos.y = 0;
        const allGrunts = document.querySelectorAll('.grunt')
        allGrunts.forEach((grunt) => {
            grunt.remove();
          });
        location.reload();
    }
}

// if (snake.body[0].x < 0 || snake.body[0].x >= board.width || snake.body[0].y < 0 || snake.body[0].y >= board.height) {
//     alert('Mental capacity reached');
//     board.board.removeChild(snake.element);
//     location.reload();
// }