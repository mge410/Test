document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".form__button")
    const square = document.querySelector(".square");
    const line = document.querySelectorAll(".form__input")
    
    
    const ramdomColor = () => {
        const getRandomValue = () => {
            return Math.floor(Math.random() * (255 - 0 + 1)) + 0
        }
        square.style.backgroundColor = `rgb(${getRandomValue()}, ${getRandomValue()},${getRandomValue()})`;
    }
    
    const inputWidth = () => {
        square.style.width = `${line[0].value}px`
    }
    
    const inputHeight = () => {
        square.style.height = `${line[1].value}px`
    }
    
    button.addEventListener("click", ramdomColor)
    line[0].addEventListener("input", inputWidth)
    line[1].addEventListener("input", inputHeight)
})