// const ativar = document.querySelector('.ativar');

// /** @param {MouseEvent} event */
// function ativarAoClick(event) {
//   console.log(event.x)
// }

// ativar.addEventListener('click', ativarAoClick)

// console.log(ativar);

const botao = document.querySelector('.botao');

function mostrar() {
  const texto = document.querySelector('.texto');
  texto.classList.toggle("ativar");
}

botao.addEventListener('click', mostrar);

//toggle adiciona se não tem e remove se tem

