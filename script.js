var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");
colorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected")
    hardButton.classList.remove("selected")
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})
hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected")
    hardButton.classList.add("selected")
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
})
resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colorDisplay to picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0;i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
})

for(var i = 0;i<squares.length; i++){
    //initial colors
    squares[i].style.backgroundColor = colors[i];
    //comparing colors
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor)
            h1.style.backgroundColor = clickedColor
            resetButton.textContent = "Play Again"
        }else{
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again!"
        }
    })
}
function changeColors(color){
    for(var i = 0;i<squares.length; i++){
        squares[i].style.backgroundColor = color
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
function generateRandomColors(num){
    var arr= [];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", " + g + ", " + b + ")";
}