const input = document.querySelector('#carta-texto');
const btn = document.querySelector('#criar-carta');
const p = document.querySelector('#carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const iniciacao = ['skewleft', 'skewright'];
const pContador = document.querySelector('#carta-contador');

function contaPalavras() {
  let cont = 0;
  let array = input.value.trim();
  array = array.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] !== '' && array[i].length >= 1) {
      cont += 1;
    }
    pContador.innerHTML = cont;
  }
}

function adicionaClasseEstilo(span, array) {
  const aleatorio = array[Math.trunc(Math.random() * array.length)];
  span.classList.add(aleatorio);
}

const addAllClass = (array) => {
  for (let a = 0; a < array.length; a += 1) {
    if (array[a] !== ' ') {
      const span = document.createElement('span');
      span.innerHTML = array[a];
      adicionaClasseEstilo(span, estilo);
      adicionaClasseEstilo(span, tamanho);
      adicionaClasseEstilo(span, rotacao);
      adicionaClasseEstilo(span, iniciacao);
      p.appendChild(span);
    }
  }
};

function adicionaSpan() {
  let array = input.value.trim();
  array = array.split(' ');
  p.innerHTML = '';
  if (input.value === '' || input.value === ' ') {
    p.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    addAllClass(array);
  }
}

btn.addEventListener('click', adicionaSpan);
btn.addEventListener('click', contaPalavras);
