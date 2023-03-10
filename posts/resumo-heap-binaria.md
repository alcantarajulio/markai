---
title: Heap Binária
discipline: Estrutura de Dados e Algoritmos
---

## O que é?

Árvore binária que possui as propriedades:
<br><br>
- Está completa até pelo menos seu *penúltimo nível*
- Se o seu último nível não está completo, todos os nós do *último nível* deverão estar agrupados a *esquerda*
- Possui dois tipos:
    - Max heap: O valor de todos os nós é menor que o nó **pai**. A raíz irá conter o maior elemento.
    - Min heap: O valor de todos os nós é maior que o nó **pai**. A raíz irá conter o menor elemento.

## Representação

Pode ser representada por uma estrutura de Array.
<br><br>
Exemplo de *Min-Heap*:
<br><br>
<img src="https://codigocomcafe.files.wordpress.com/2010/09/heap1.png" widght="600" height="400">

Para obter pai, filhos usamos os índices do Array para obter, onde vai ser:
<br><br>
- `parent(i) return i/2`
- `left-son(i) return 2i`
- `right-son(i) return 2i + 2`
<br><br>

Pode verificar isso na imagem acima, pegando por exemplo **4** que está na posição **i=1**, para sabemos seu filho a esquerda, fazemos **2*i=2** que é o elemento **9**


## Implementação

- Para manter a invariância da raíz, se for Max-heap sempre deve ser o maior elemento, Min-heap o menor. É preciso uma operação de **HEAPIFY** que verifica cada nó e vai subindo a árvore


## Aplicações
- Priority Queue: Heap é usada para implementar uma fila que possui uma certa ordem de prioridade e ordenação, sendo usada para a classe Java **PriorityQueue**

## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>
