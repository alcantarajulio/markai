---
title: Bubble Sort 
discipline: Laboratório de Estrutura de Dados e Algoritmos
---

## Bubble Sort 

**Bubble Sort**é um algoritmo de classificação comumente usado em ciência da computação. O **Bubble Sort** baseia-se na ideia de comparar repetidamente pares de elementos adjacentes e, em seguida, trocar as suas posições se existirem na ordem errada.
<br><br>

## Algoritmo de classificação de bolhas: 

- Em uma matriz não classificada de 5 elementos, comece com os dois primeiros elementos e classifique-os em ordem crescente. (Compare o elemento para verificar qual é o maior).
- Compare o segundo e o terceiro elemento para verificar qual é o maior e classifique-os em ordem crescente.
- Compare o terceiro e o quarto elemento para verificar qual é o maior e classifique-os em ordem crescente.
- Compare o quarto e o quinto elemento para verificar qual é o maior e classifique-os em ordem crescente.
- Repita as etapas 1–5 até que não sejam necessárias mais trocas.

<br>

Abaixo está uma imagem de uma matriz que precisa ser classificada. Usaremos o algoritmo de classificação de bolhas para classificar esta matriz:
<br><br>
Exemplo de funcionamento do Bubble Sort:
<img src ="https://techdemic.com/wp-content/uploads/2017/08/BubbleSort.jpg" widght="600" height="400">

## Algoritmo do Bubble Sort em Java

```java
var bubble_sort_classic = function (array) {
var length = array.length;
for (var i = 0; i <comprimento; i ++) {
  for (var j = 0; j <comprimento - i - 1; j ++) {
    if (matriz [j]> matriz [j + 1]) {
      array.swap (j, j + 1);
    }
  }
}
array de retorno;
};
```
## Fontes

1. <a href="https://blog.betrybe.com/tecnologia/bubble-sort-tudo-sobre/" target= "_blank" > Blog Betrybe </a>


