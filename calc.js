const numBtns = document.querySelectorAll('.input');

numBtns.forEach(nbt => nbt.addEventListener('click', function(event) {
    console.log(event.srcElement.innerText);
    console.log(event.srcElement.classList);

    const   srcEl   = event.srcElement,
            classes = srcEl.classList;

    let     key = srcEl.innerText;

    const display = document.querySelector('#display');
    console.log(display.innerText);

    if (classes.contains('oper'))
        key = ' ' + key + ' ';
    
    display.innerHTML += key;
}));

const clrBtn = document.querySelector('.clear');

clrBtn.onclick = () => {
    const display = document.querySelector('#display');
    display.innerText = '';
}

const eqlBtn = document.querySelector('.equals');

eqlBtn.onclick = () => {
    const display = document.querySelector('#display');
    display.innerText = eval(display.innerText);
}