function handleButtonClick() {
    var audio = new Audio('Assets/choo-choo-sound.mp3');
    audio.volume = 1;
    audio.play().then(() => {
        console.log('Audio is playing.');
    }).catch(error => {
        console.error('Error playing audio:', error);
    });
}

// Event listener for button click
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playButton').addEventListener('click', handleButtonClick);
});