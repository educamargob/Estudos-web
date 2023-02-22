const botao = document.querySelector('#adicionar');

console.log(valor);

function adicionar() {
  const elemento = document.querySelector('#valor');
  let valor = elemento.innerHTML;
  if(valor < 10){
    valor = Number(valor);
    valor++;
    elemento.innerHTML = valor
  } else {
    alert("Limite máximo atingido!")
    botao.disabled = true;
  }
}

if (botao) {
  botao.addEventListener('click', adicionar);
}