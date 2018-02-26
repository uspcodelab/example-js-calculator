/****************************************************  
 Vamos fazer o visor mostrar os números
****************************************************/

/* Sem usar definição de função (mostrar esse jeito primeiro)

const numButtons = document.querySelectorAll('.numbtn');

numButtons.forEach(numButton => numButton.addEventListener("click", function (event) {
    // mostrar como imprimir no console ajuda a saber q está funcionando
    console.log(event.srcElement.innerText);

    let visor = document.querySelector(".visor");
    // essa variável não precisava existir, é apenas para ficar mais
    // fácil de entender o que significa visor.innerHTML
    let visorNow = visor.innerHTML;

    // (mudamos durante a apresentação):
    // qual número foi clicado -> qual tecla foi clicada
    // let num = event.srcElement.innerText; -> let key = event.srcElement.innerText;

    let key = event.srcElement.innerText;

    // faz o tratamento especial da tecla Clear
    if (key === "C") {
        visor.innerHTML = "";
    }
    else {
        visor.innerHTML = visorNow + num;
    }

    // faz o novo número aparecer no visor (mas exclui o anterior)
    // talvez podemos fazer desse jeito antes, e falamos de concatenação de strings
    // pro jeito certo
    // visor.innerHTML = num;
    // faz o novo número aparecer no visor (sem excluir o anterior)
    // visor.innerHTML = visorNow + num;
})); */

let visor = document.querySelector(".visor");

function keyClicked(event) {
    // mostrar como imprimir no console ajuda a saber q está funcionando
    console.log(event.srcElement.innerText);

    let key = event.srcElement.innerText;

    // essa variável não precisava existir, é apenas para ficar mais
    // fácil de entender o que significa visor.innerText
    let visorNow = visor.innerHTML;

    if (key === "C") {
        visor.innerHTML = "";
    }
    else {
        visor.innerHTML = visorNow + key;
    }
}

const numButtons = document.querySelectorAll('.numbtn');
numButtons.forEach(numButton => numButton.addEventListener("click", keyClicked));

/****************************************************  
 Nesse ponto, o numpad está completamente funcional
****************************************************/

/****************************************************  
 Vamos fazer as operações funcionarem
****************************************************/

function opKeyClicked(event) {
    let operation = event.srcElement.innerText;
    let visorNow = visor.innerText;

    if (operation !== '='){
        // No lugar de apenas dar um append no operador, vamos usar a nova
        // formatação de string (do ES6) para colocar espaços na expressão
        visor.innerText = `${visorNow} ${operation} `;
    }
    else if (operation === '='){
        let result = eval(visorNow);
        console.log(result);
        visor.innerText = result;
    }
    else return;
}

const opButtons = document.querySelectorAll('.opbtn');
opButtons.forEach(numButton => numButton.addEventListener("click", opKeyClicked));

/****************************************************  
 Nesse ponto, a calculadora funciona completamente
****************************************************/