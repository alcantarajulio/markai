---
title: Quick Sort 
discipline: Laboratório de Estrutura de Dados e Algoritmos
---

## Quick Sort

Assim como o Merge Sort, o Quick Sort é um algoritmo que se baseia no princípio da divisão e conquista, porem ele trabalha de maneira contrária uma vez que a parte mais pesada do algoritmo acontece antes da recursão e não nela.
<br><br>
O algoritmo Quick Sort trabalha ordenando uma sequência qualquer de valores dividindo-a em subsequências menores, aplicando recursão para ordenar cada uma destas subsequências e por fim, concatenando-as novamente em uma sequência idêntica a original, porém, já ordenada.
<br><br>
Para melhor compreensão, vamos de uma imagem que explica bem o que é o Quick Sort:
<img src="https://wat-images.s3.ap-south-1.amazonaws.com/images/course/ci6ldqnqthum/Quick_Sort_0.png" width="600" height="400">

## Particionamento 

O funcionamento do Quick Sort baseia-se em uma rotina fundamental cujo nome é particionamento. Particionar significa escolher um número qualquer presente no array, chamado de pivot, e colocá-lo em uma posição tal que todos os elementos à esquerda são menores ou iguais e todos os elementos à direita são maiores.


## Algortimo do Particionamento em Java

```java

@author João Arhtur Brunet 

public static int partition(int[] values, int left, int right) {
        
        int pivot = values[left];
        int i = left;

        for (int j = left + 1; j <= right; j++) {
            if (values[j] <= pivot) {
                i+=1;
                swap(values, i, j);
            }
        }

        // troca pivot (values[left]) com i.
        swap(values, left, i);
        
        return i; 
    }
```

## Algoritmo do Quick Sort em Java

```java

@author João Athur Brunet

public static void quickSort(int[] values, int left, int right) {
	if (left < right) {
		int index_pivot = partition(values, left, right);
		quickSort(v, left, index_pivot - 1);
		quickSort(v, index_pivot + 1, right);	
	}
}
```

## Fontes 

1. <a href="https://joaoarthurbm.github.io/eda/posts/quick-sort/" target="_blank">Ordenação por Comparação: Quick Sort</a>
2. <a href="http://www.universidadejava.com.br/pesquisa_ordenacao/quick-sort/" target="_blank">Universidade Java pesquisa ordenação: Quick Sort</a>

## Autor

- Post desenvolvido por Rayane Bezerra da Silva
