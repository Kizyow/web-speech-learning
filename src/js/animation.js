function animateButton() {
    const button = document.getElementById('play');

    button.classList.add('button-clicked');
    button.classList.add('button-green');

    setTimeout(() => {
        button.classList.remove('button-clicked');
    }, 500); //

    setTimeout(() => {
        button.classList.remove('button-green');
    }, 1500); //// La même durée que l'animation

}

function animateReplayButton() {
    const button = document.getElementById('replay');

    button.classList.add('button-clicked');
    button.classList.add('button-green');

    setTimeout(() => {
        button.classList.remove('button-clicked');
    }, 500); //

    setTimeout(() => {
        button.classList.remove('button-green');
    }, 1500); //// La même durée que l'animation

}