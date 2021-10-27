const input = document.querySelector('#carta-texto');
const btn = document.querySelector('#criar-carta');
const p = document.querySelector('#carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const iniciacao = ['skewleft', 'skewright'];

btn.addEventListener('click', adicionaSpan);

function adicionaSpan() {
  let array = input.value.split(' ');
  p.innerHTML = '';

  if (input.value === '' || input.value === ' ') {
    p.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let a of array) {
      let span = document.createElement('span');
      span.innerHTML = a;
      adicionaClasseEstilo(span, estilo);
      adicionaClasseEstilo(span, tamanho);
      adicionaClasseEstilo(span, rotacao);
      adicionaClasseEstilo(span, iniciacao);
      p.appendChild(span);
    }
  }
}

function adicionaClasseEstilo(span, array) {
  let aleatorio = array[Math.round(Math.random() * array.length)];
  span.classList.add(aleatorio);
}