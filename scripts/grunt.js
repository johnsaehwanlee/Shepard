class Grunt {
    constructor(gameBoard) {
        this.SPEED = 5;
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

        if (cursorCheck(gruntTag)) {
            alert('Game Over - You Shepherded ' + score + ' Sheep');
        }
        // console.log('left')
        // console.log(gruntTag.style.left);
        // console.log('top')
        // console.log(gruntTag.style.top);
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
        return true;
    } else {
        return false;
    }
}
