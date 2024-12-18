import { CountingSort } from './countingSort/countingSort'



const dadosNumericos = {
  array: [4, 2, 2, 2, 3, 3, 1, 7],
  minimo: 1,
  maximo: 7,
  keyExtractor: (item: number) => item
};

const ordenacaoNumerica = new CountingSort(dadosNumericos);
const arrayOrdenadoNumerico = ordenacaoNumerica.ordenar();
console.log("Array Ordenado:", arrayOrdenadoNumerico);




