---
title: Counting Sort
discipline: Laboratório de Estrutura de Dados e Algoritmos
---

## Counting Sort
<strong>Counting sort</strong> é um algoritmo de ordenação estável cuja complexidade é O(n). As chaves podem tomar valores entre 0 e M-1. Se existirem k0 chaves com valor 0, então ocupam as primeiras k0 posições do vetor final: de 0 a k0-1.
<br><br>
A ideia básica do counting sort é determinar, para cada entrada x, o número de elementos menor que x. Essa informação pode ser usada para colocar o elemento x diretamente em sua posição no array de saída. Por exemplo, se há 17 elementos menores que x, então x pertence a posição 18. Esse esquema deve ser ligeiramente modificado quando houver vários elementos com o mesmo valor, uma vez que nós não queremos que sejam colocados na mesma posição
<br><br>
Logo abaixo para melhor detatalhamento, temos uma ilustração de como seria o <strong>Couting Sort</strong>:
<br><br>
<img src ="https://felipepriuli.files.wordpress.com/2013/01/exemplo_vetor_bs.png" widght="600" height="400">

## Algoritmo do Couting sort em Java

```java
@author João Arthur Brunet 

public static int[] countingSort(int[] A, int k) {
    
        int[] C = new int[k];

        // frequência
        for (int i = 0; i < A.length; i++) {
            C[A[i] - 1] += 1;
        }
        
        // cumulativa
        for (int i = 1; i < C.length; i++) {
            C[i] += C[i-1];
        }

        int[] B = new int[A.length];

        for (int i = A.length - 1; i >= 0; i--) {
            B[C[A[i] - 1] -1] = A[i];
            C[A[i] - 1] -= 1;
        }

        return B;
    
}
```
## Fontes 
1. <a href="https://pt.wikipedia.org/wiki/Counting_sort" target="_blank">Wikipédia Couting Sort</a>
2. <a href="https://joaoarthurbm.github.io/eda/posts/ordenacao-linear/" target="_blank"> Ordenação Linear: Couting sort (João Arthur Brunet) </a>

## Autor 
- Post desenvolvido por Rayane Bezerra da Silva