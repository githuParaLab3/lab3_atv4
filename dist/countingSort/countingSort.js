"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountingSort = void 0;
class CountingSort {
    constructor(dados) {
        this.dados = dados;
    }
    ordenar() {
        const { array, minimo, maximo, keyExtractor } = this.dados;
        const intervalo = keyExtractor(maximo) - keyExtractor(minimo) + 1;
        const contagem = new Array(intervalo).fill(0);
        for (const item of array) {
            const chave = keyExtractor(item);
            contagem[chave - keyExtractor(minimo)]++;
        }
        let indiceOrdenado = 0;
        const arrayOrdenado = new Array(array.length);
        for (let i = 0; i < intervalo; i++) {
            while (contagem[i] > 0) {
                arrayOrdenado[indiceOrdenado] = this.encontrarItemPorChave(i + keyExtractor(minimo));
                indiceOrdenado++;
                contagem[i]--;
            }
        }
        return arrayOrdenado;
    }
    encontrarItemPorChave(chave) {
        const { array, keyExtractor } = this.dados;
        return array.find(item => keyExtractor(item) === chave);
    }
}
exports.CountingSort = CountingSort;
