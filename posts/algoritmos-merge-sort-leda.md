---
title: Merge Sort
discipline: Laboratório de Estrutura de Dados e Algoritmos 
---

## Merge Sort 

O merge sort, ou ordenação por mistura, é um exemplo de algoritmo de ordenação por comparação do tipo dividir-para-conquistar.

Sua ideia básica consiste em Dividir (o problema em vários subproblemas e resolver esses subproblemas através da recursividade) e Conquistar (após todos os subproblemas terem sido resolvidos ocorre a conquista que é a união das resoluções dos subproblemas). Como o algoritmo Merge Sort usa a recursividade, há um alto consumo de memória e tempo de execução, tornando esta técnica não muito eficiente em alguns problemas. 
<br><br>
<br><br>
<img src="https://static.wixstatic.com/media/e0d344_a53b1fe074f84bc2af25b7d95a00c958~mv2.png/v1/fill/w_600,h_274,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0d344_a53b1fe074f84bc2af25b7d95a00c958~mv2.png">
<br><br>
Traduções para o português dos textos contidos na imagem:
<br><br>
1. <strong>Original</strong>: While merging the sublists, check the first element of each sublist to achieve its right sorting order. 
2. <strong>Tradução</strong>: Ao mesclar as sublistas, verifique o primeiro elemento de cada sublista para obter a ordem de classificação correta.
3. <strong>Original</strong>: The sorted sublists are merged with its adjacent value maintaining the sorted order.
4. <strong>Tradução</strong>: As sublistas classificadas são mescladas com seu valor adjacente mantendo a ordem classificada.
5. <strong>Original</strong>: 4 sorted sublists are created. Continue merging the first two sublists by maintainig the sorted order.
6. <strong>Tradução</strong>: 4 sublistas classificadas são criadas. Continue mesclando as duas primeiras sublistas mantendo a ordem de classificação.
7. <strong>Original</strong>: The final two sublist are merged to achieve the sorted order.
8. <strong>Tradução</strong>: As duas sublistas finais são mescladas para atingir a ordem de classificação.

## Algoritmo do Merge Sort em Java

```java

@author João Athur Brunet

public void mergeSort(int[] v, int left, int right) {   
        
        if (left >= right)
            return;
        
        else {
            
            int middle = (left + right) / 2;
            mergeSort(v, left, middle);
            mergeSort(v, middle + 1, right);
    
            merge(v, left, middle, right);
        }
        
    }

public void merge(int[] v, int left, int middle, int right) {
        
        // transfere os elementos entre left e right para um array auxiliar.
        int[] helper = new int[v.length];
        for (int i = left; i <= right; i++) {
            helper[i] = v[i];
        }
        
        
        int i = left;
        int j = middle + 1;
        int k = left;
        
        while (i <= middle && j <= right) {
            
            if (helper[i] <= helper[j]) {
                v[k] = helper[i];
                i++;
            } else {
                v[k] = helper[j];
                j++;
            }
            k++;    
            
        }
        
        // se a metade inicial não foi toda consumida, faz o append.
        while (i <= middle) {
            v[k] = helper[i];
            i++;
            k++;
        }
        
        // se a metade final não foi toda consumida, faz o append.
        while (j <= right) {
            v[k] = helper[j];
            j++;
            k++;
        }

    }
```

## Fontes 

1. <a href="https://pt.wikipedia.org/wiki/Merge_sort" target="_blank"> Wikipédia Merge Sort</a>
2. <a href="https://joaoarthurbm.github.io/eda/posts/merge-sort/" target="_blank"> Ordenação por Comparação: Merge Sort (João Athur Brunet)</a>

## Autor

- Post desenvolvido por Rayane Bezerra da Silva 