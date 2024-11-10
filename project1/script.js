function changeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgbColor = `rgb(${r}, ${g}, ${b})`;
    
    document.body.style.backgroundColor = rgbColor;
    
    var text = document.querySelector(".text");
    text.innerText = rgbColor;
}