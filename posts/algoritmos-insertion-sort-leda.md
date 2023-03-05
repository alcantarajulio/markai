---
title: Insertion Sort
discipline: Laboratório de Estrutura de Dados
---

## Insertion Sort 

Insertion sort, ou traduzindo pro nosso lindo português, inserção ordenada, é um algoritmo de ordenação que, dado uma estrutura (array, lista) vai ordena-lo por inserção, ou seja colocar determinado elemento na posição correta. Muitas pessoas pensam no insertion como um baralho de cartas. Quem aqui nunca jogou um baralhinho? nem que seja com os idosos que ficam embaixo do pé de pau jogando. Então, imagina que você está jogando ás cartas. Todas as cartas da sua mão estão ordenadas. Você acabou de receber uma nova carta, e precisa colocá-la na posição correta, de forma que ao final as cartas obedeçam a regra de ordenação. A cada nova carta que você recebe, sua carta pode ser menor ou maior do que as cartas que você já tem em mãos, logo você começa a comparar sua carta nova com todas as cartas na sua mão até encontrar a posição correta, e novamente você terá todas as cartas ordenadas. 
<br><br>
Vamos a um passo a passo, pra da uma facilitada na compreensão: 
<br><br>

- Primeiro passo: Sempre consideremos o primeiro elemento do nosso array como ordenado.
- Segundo passo: Comparamos o nosso elemento, com o seu anterior. Caso seja menor realizamos uma troca, as trocas so devem parar nos seguintes casos: nosso elemento chegou na posição zero do nosso array (então significa que já esta ordenado) ou o elemento anterior é maior que o elemento que está a ser comparado.
<br><br>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png">

## Algoritmo do Insertion Sort em java

```java
@author João Arthur Brunet

...
public static void insertionSort(int[] values) {
	for (int i = 1; i < values.length; i++) { 
		
		int j = i;
	
		while (j > 0 && values[j] < values[j-1]) {
			int aux = values[j];
			values[j] = values[j - 1];
			values[j - 1] = aux;
			j -= 1;
		}
	
	}	
}
```

## Fontes 

- Materias do professor João Arthur Brunet
- Estou dando os créditos (professor nao me processe!!!!)
- Post desenvolvido por Rayane Bezerra da Silva.