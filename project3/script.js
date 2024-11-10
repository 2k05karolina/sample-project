let number = 0;
let resetClicked = false; // Track if Reset was clicked once

function updateDisplay() {
    document.getElementById("numberDisplay").textContent = number;
}

function increaseNumber() {
    number++;
    updateDisplay();
    resetClicked = false; // Reset the flag when counter changes
    document.getElementById("resetButton").classList.remove("alert");
}

function decreaseNumber() {
    number--;
    updateDisplay();
    resetClicked = false; // Reset the flag when counter changes
    document.getElementById("resetButton").classList.remove("alert");
}

function resetNumber() {
    const resetButton = document.getElementById("resetButton");

    if (number === 0) {
        if (resetClicked) {
            alert("The counter is already at zero!");
            resetButton.classList.add("alert"); // Change color if already zero and clicked twice
        }
        resetClicked = true; // Set flag after the first click
    } else {
        number = 0;
        updateDisplay();
        resetClicked = false; // Reset flag when counter is set to zero
        resetButton.classList.remove("alert");
    }
}
