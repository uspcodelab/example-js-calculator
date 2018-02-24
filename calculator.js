// Este arquivo de formato .js é o nosso script
// escrito em JavaScript.
// JavaScript é o que faz a calculadora funcionar!

// Esse comentário inicial ^ pode ser transformado em multiline

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

function keyClicked(event) {
    // mostrar como imprimir no console ajuda a saber q está funcionando
    // console.log(event.srcElement.innerText);

    let visor = document.querySelector(".visor");
    // essa variável não precisava existir, é apenas para ficar mais
    // fácil de entender o que significa visor.innerHTML
    let visorNow = visor.innerHTML;
    
    let key = event.srcElement.innerText;

    if (key === "C") {
        visor.innerHTML = "";
    }
    else {
        visor.innerHTML = visorNow + num;
    }
}

const numButtons = document.querySelectorAll('.numbtn');
numButtons.forEach(numButton => numButton.addEventListener("click", keyClicked));


