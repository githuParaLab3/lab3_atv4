export interface DadosCountingSort<T> {
    array: T[];
    minimo: T;
    maximo: T;
    keyExtractor: (item: T) => number;
  }
  