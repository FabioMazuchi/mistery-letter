const input = document.querySelector('#carta-texto');
const btn = document.querySelector('#criar-carta');
const p = document.querySelector('#carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const iniciacao = ['skewleft', 'skewright'];

function adicionaClasseEstilo(span, array) {
  const aleatorio = array[Math.round(Math.random() * array.length)];
  span.classList.add(aleatorio);
}

function adicionaSpan() {
  const array = input.value.split(' ');
  p.innerHTML = '';

  if (input.value === '' || input.value === ' ') {
    p.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let a = 0; a < array.length; a += 1) {
      const span = document.createElement('span');
      span.innerHTML = array[a];
      adicionaClasseEstilo(span, estilo);
      adicionaClasseEstilo(span, tamanho);
      adicionaClasseEstilo(span, rotacao);
      adicionaClasseEstilo(span, iniciacao);
      p.appendChild(span);
    }
  }
}

btn.addEventListener('click', adicionaSpan);
