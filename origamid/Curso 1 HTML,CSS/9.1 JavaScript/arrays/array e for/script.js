const lista = ['JavaScript', 20, true];

const body = document.querySelector('body');

for (let i = 0; i < lista.length; i++) {
  body.innerHTML += "<li>" + lista[i] + "</li>";
}

// // Jeito 2
// for (i in lista){
//   console.log(lista[i]);
// }

// Jeito 3
function adicionarBody(item){
  body.innerHTML += "<li>" + item + "</li>";
}


lista.forEach(adicionarBody);