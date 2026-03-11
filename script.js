buttons = document.querySelectorAll("button")
outputResult = document.querySelector(".output-result")

console.log(outputResult)

num1 = 1
operator = "+"
num2 = 2


function add(){
   return num1 + num2
}

function subtract(){
    return num1 - num2
}

function multiply(){
    return num1 * num2
}

function divide(){
    return num1 - num2
}



buttons.forEach(button => {
    button.addEventListener("click", () => {
        outputResult.innerText += button.textContent
    })
});


function operate(operator, num1, num2){
    return num1 + operator + num2
}

console.log(operate(add(), 1, 2))