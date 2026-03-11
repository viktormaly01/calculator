let buttons = document.querySelectorAll("button")
let operador = document.querySelectorAll(".operador")
let outputResult = document.querySelector(".output-result")

oper = false

num1 = ""
num2 = ""

function add(num1, num2){
   return num1 + num2
}

function subtract(){
    return num1 - num2
}

function multiply(){
    return num1 / num2
}

function divide(){
    return num1 - num2
}

//logica
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const element = event.target;
        if(element.classList.contains("operator")){
            oper = button.textContent
        }
    });
});

/*
function operate(numero1, operador, numero2){
    return resultado = numero1 + operador + numero2
}*/

buttons.forEach(button => {
    button.addEventListener("click", (event) => {     
        const element = event.target;
        console.log(oper)
        if(!oper){
            num1 += button.textContent
            console.log(num1)
        }else if(element.classList.contains("btn-value")){
            num2 += button.textContent
            console.log(num2)
        }
            
        outputResult.innerText += button.textContent
        
        firstValue = Number(num1)
        console.log(typeof(firstValue))

        if(button.textContent == "="){
            firstValue = Number(num1)
            secondValue = Number(num2)
            //operadorUm = Number(operar)
            console.log(oper)
            let resposta 

            if(oper == "+"){
                resposta = add(firstValue, secondValue)
            } else if(oper== "-"){
                resposta = subtract(firstValue, secondValue)
            } else if(oper == "*"){
                resposta = multiply(firstValue, secondValue)
            } else{
                resposta = divide(firstValue, secondValue)
            }

            outputResult.innerText = resposta
        }
    })
});

/*
console.log(operate(add(), 1, 2))*/