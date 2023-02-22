function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const anos = 2023 - ano;
  const frase = nome + ' por ' + autor;
  const dados = {
    nomeMaior,
    anos,
    frase
  };
  return dados;
}

const retorno = livro('Senhor dos Anéis', 1954, 'J. R. R. Tolkein');

console.log(retorno)
