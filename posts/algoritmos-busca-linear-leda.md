---
title: Busca Linear Recursiva 
discipline: Laboratório de Estrutura de Dados e Algoritmos
---

## Busca Linear Recursiva

Na busca linear temos um dado array, com n posições e queremos verfificar se um determinado elemento está ou não contido no nosso array. Logo teremos que percorrer todo array de forma recursiva até encontrar ou não o elemento desejado. 
<br><br>

Logo abaixo, temos uma implementação em java do algoritmo de busca linear recusiva, para maior compreensão: 
<br><br>

## Algoritmo da Busca Linear Recursiva em java

```java
@author Adalberto Cajueiro 

public boolean buscaLinear(int [] array, int x , int indice){
    boolean resp = false;
    if (indice < array.length){
        if(array[indice] == x){
            resp = true;
        } else {
            resp = buscaLinear(array,x, indice + 1);
        }
    }
    return resp;
}

```

## Fontes 

1. <a href="https://youtu.be/NzfscnQv00Q" target="_blank"> Exemplo de recursão - Busca Linear (Adalberto Cajueiro)</a>

## Autor 

- Post desenvolvido por Rayane Bezerra da Silva 
