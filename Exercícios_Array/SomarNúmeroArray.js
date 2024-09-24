/*
Crie um programa que receba uma lista de números separados por vírgulas, armazene esses números em um array, e depois calcule a soma de todos os números do array. O resultado da soma deve ser exibido na tela.
*/

var lista1 = [9, 10, 4]
var lista2 = [3, 11, 3]
var soma1 = 0
var soma2 = 0
for (var c = 0; c < lista1.length; c++){
    soma1 += lista1[c]
    soma2 += lista2[c]
}
console.log(soma2 + soma1)
