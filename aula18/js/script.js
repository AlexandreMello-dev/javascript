const numero = Number(prompt("Digite um número:"));
const numeroRaiz = Math.sqrt(numero)
const numF = numero.toFixed(2);
const numeroTitulo = document.getElementById('numero-titulo');
const titulo = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
titulo.innerHTML += `<p>Raiz quadrada: ${numero}</p>`;
titulo.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
titulo.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
titulo.innerHTML += `<p>Arrendondando para baixo ${Math.round(numero)}</p>`
titulo.innerHTML += `<p>Arrendondando para cima ${Math.ceil(numero)}</p>`
titulo.innerHTML += `<p>Com duas casas decimais: ${numF}</p>`
