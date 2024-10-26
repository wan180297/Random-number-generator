const buttonGenerateNumber = document.querySelector("button");

function generateNumber() {
    const inputNumberAleatorio = document.querySelector("input");
    
    inputNumberAleatorio.placeholder = (Math.random() * 100).toFixed(2);
}
buttonGenerateNumber.addEventListener("click", generateNumber);