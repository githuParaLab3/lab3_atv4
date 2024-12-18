"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countingSort_1 = require("./countingSort/countingSort");
const dadosNumericos = {
    array: [4, 2, 2, 2, 3, 3, 1, 7],
    minimo: 1,
    maximo: 7,
    keyExtractor: (item) => item
};
const ordenacaoNumerica = new countingSort_1.CountingSort(dadosNumericos);
const arrayOrdenadoNumerico = ordenacaoNumerica.ordenar();
console.log("Array Ordenado:", arrayOrdenadoNumerico);
