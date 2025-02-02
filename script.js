//dom manipulation

function moveImage(event){
    // i want to move the images up,down,left,right using arrow keys
    const image = document.querySelector('.bucketImage')
    const step = 25; // number of positon to move

    let top = parseInt(window.getComputedStyle(image).top) || 0;
    let left = parseInt(window.getComputedStyle(image).left) || 0;

    switch(event.key) {
        case 'ArrowUp': 
        top -= step;
        break;

        case 'ArrowDown': 
        top += step;
        break;

        case 'ArrowLeft': 
        left -= step;
        break;

        case 'ArrowRight': 
        left += step;
        break;
    }

    image.style.top = `${top}px`;
    image.style.left = `${left}px`;

}

window.addEventListener('keydown', moveImage);
