document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to my website!');

    // Get references to the buttons
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const body = document.body;

    // Set initial font size
    let fontSize = 16; // 16px

    // Function to change the font size
    function changeFontSize(size) {
        fontSize = size;
        body.style.fontSize = `${fontSize}px`;
    }

    // Increase font size event listener
    increaseFontButton.addEventListener('click', function() {
        changeFontSize(fontSize + 2);
    });

    // Decrease font size event listener
    decreaseFontButton.addEventListener('click', function() {
        changeFontSize(fontSize - 2);
    });
});