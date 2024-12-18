import { DadosCountingSort } from '../type/dadosCounting'

export class CountingSort<T> {
  private dados: DadosCountingSort<T>;

  constructor(dados: DadosCountingSort<T>) {
    this.dados = dados;
  }

  ordenar(): T[] {
    const { array, minimo, maximo, keyExtractor } = this.dados;

    const intervalo = keyExtractor(maximo) - keyExtractor(minimo) + 1;
    const contagem: number[] = new Array(intervalo).fill(0);

    for (const item of array) {
      const chave = keyExtractor(item);
      contagem[chave - keyExtractor(minimo)]++;
    }

    let indiceOrdenado = 0;
    const arrayOrdenado: T[] = new Array(array.length);

    for (let i = 0; i < intervalo; i++) {
      while (contagem[i] > 0) {
        arrayOrdenado[indiceOrdenado] = this.encontrarItemPorChave(i + keyExtractor(minimo));
        indiceOrdenado++;
        contagem[i]--;
      }
    }

    return arrayOrdenado;
  }

  private encontrarItemPorChave(chave: number): T {
    const { array, keyExtractor } = this.dados;
    return array.find(item => keyExtractor(item) === chave) as T;
  }
}
