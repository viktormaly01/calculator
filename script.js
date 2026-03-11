buttons = document.querySelectorAll("button")
operador = document.querySelectorAll(".operador")
outputResult = document.querySelector(".output-result")

operar = false

num1 = ""
num2 = ""

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

//logica
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const element = event.target;
        if(element.classList.contains("operator")){
            operar = button.textContent
        }
    });
});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {     
        const element = event.target;

        if(!operar){
            num1 += button.textContent
            console.log(num1)
        }else if(element.classList.contains("btn-value")){
            num2 += button.textContent
            console.log(num2)
        }
            
        outputResult.innerText += button.textContent

        if(button.textContent == "="){
            operate(operar, num1, num2)
            console.log(operate((operar, num1, num2)))
        }
    })
});

function operate(operator, num1, num2){
    resultado = num1 + operator + num2
}

console.log(operate(add(), 1, 2))

valor1 = 1
valor2 = 2
valor3 = valor1+valor2