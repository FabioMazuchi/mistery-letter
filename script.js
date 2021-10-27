const input = document.querySelector('#carta-texto');
const btn = document.querySelector('#criar-carta');
const p = document.querySelector('#carta-gerada');

btn.addEventListener('click', function () {
    let array = input.value.split(' ');
    p.innerHTML = '';

    if (input.value === '' || input.value === ' ') {
        p.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
        for (let a of array) {
            let span = document.createElement('span');
            span.innerHTML = a;
            p.appendChild(span);
        }
    }
});
