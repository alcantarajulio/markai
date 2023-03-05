---
title: Selection Sort
discipline: Laboratório de Estrutura de Dados
---

## Selection Sort 

Este algoritmo é baseado em se passar sempre o menor valor do vetor para a primeira posição (ou o maior dependendo da ordem requerida), depois o segundo menor valor para a segunda posição e assim sucessivamente, até os últimos dois elementos.

<br>
Vamos a um passo a passo, pra ficar mais simples. 
<br><br>
Primeiro temos um array com os seguintes elementos [7,4,5,9,8,2,1]. Nosso arrayzinho nao está ordenado, entaão vamos lá ordenar usando o selection sort. 
<br> <br>

- Primeiro passo: definimos como menor o elemento que está na posição 0 do nosso array.
- Segundo passo: Vamos comparar o nosso menor, com todos os outros elementos. Até achar o menor. 
- Terceiro passo: Depois de percorrer todo array, teremos o menor elemento, então agora podemos fazer a troca, que seria colocar o nosso menor na posição zero. Pronto, o menor elemento do nosso array agora está na posição correta. Vamos repetir esse processo varias vezes e assim nosso array ficará ordenado.
<br><br>

Segue uma imagem ilustrando esse passo a passo, mais detalhado.

<img src ="https://i.stack.imgur.com/5ai2E.jpg" >


## Algortimo do Selection Sort 

```java

@author : João Athur Brunet

public static void selectionSort(int[] v) {	
	for (int i = 0; i < v.length; i++) {
		
		int i_menor = i;
		for (int j = i + 1; j < v.length; j++)
			if (v[j] < v[i_menor])
				i_menor = j;
		
		int aux = v[i];
		v[i] = v[i_menor];
		v[i_menor] = aux;
	
	}		
}

```

## Fontes

- Materias do professor João Arthur Brunet
- Estou dando os créditos (professor nao me processe!!!!)
- Post desenvolvido por Rayane Bezerra da Silva.
