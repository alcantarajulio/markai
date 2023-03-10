---
title: Árvore BST (Binary Search Tree)
discipline: Estrutura de Dados e Algoritmos
---

# O que é?

É uma árvore binária (*BT*) onde todos os nós filhos à esquerda - ou seja, da subárvore esquerda - possuem um valor numérico menor do que o do nó pai e todos os nós filhos à direita - ou seja, da subárvore direita - possuem um valor maior do que o do nó pai. Tal aplicação serve pra possibilitar a implementação de uma **busca binária**. Uma árvore binária de busca com chaves aleatórias uniformemente distribuídas tem altura **O(log n)**. O pior caso será **O(n)**, quando todas os valores se distribuem de forma linear, o que gera uma *lista encadeada*.


## Métodos

### Inserção

A inserção em uma árvore binária de busca é feita de forma ordenada. Para cada novo nó da árvore é verificado se a chave do novo nó é maior ou menor que o nó atual, sendo o nó atual inicialmente a raiz.

Se for menor o novo nó será inserido a esquerda do nó raiz senão será inserido a direita do nó raiz. Caso o nó a esquerda ou direita não seja um folha (nó sem sub árvore) a verificação deverá ser feita novamente.


### Busca

O processo de busca é muito parecido com a busca binária em um vetor ordenado e, geralmente, é abordado tanto em forma interativa como recursiva seguindo os seguintes passos:
<br><br>
• Começa pela raiz

• Verifica se o valor do nó atual é igual, se for, a busca é finalizada. Se não:

• Se o valor for menor, chama a função para o nó da esquerda.

• Se o valor for maior, chama a função para o nó da direita.

### Remoção

A exclusão de um nó é um processo mais complexo. Para excluir um nó de uma árvore binária de busca, é preciso analisar três casos distintos para a exclusão:
<br><br>
**1º Remoção de um nó folha**
<br><br>
Este é o caso mais simples, basta remover o nó da árvore.
<br><br>
**2º Remoção de um nó com apenas 1 filho**
<br><br>
Neste caso, basta que o pai do nó a ser removido tenha como seu filho, o seu neto, ou seja, o filho do nó a ser removido.
<br><br>

**3º Remoção de um nó com 2 filhos**
<br><br>
Nesta situação, pode-se operar de duas maneiras diferentes. Pode-se substituir o valor do nó a ser retirado pelo valor sucessor (o nó mais à esquerda da subárvore direita) ou pelo valor antecessor (o nó mais à direita da subárvore esquerda), removendo-se aí o nó sucessor (ou antecessor).

### Percursos
Considere que o nó inicial é a raiz
<br><br>

**Pré-ordem:**
<br><br>

1. Visita a nó
2. Percorre a subárvore esquerda em pré-ordem
3. Percorre a subárvore direita em pré-ordem
<br><br>

**Ordem Simétrica (ou em-ordem):**
<br><br>

1. Percorre a subárvore esquerda em ordem simétrica
2. Visita a nó
3. Percorre a subárvore direita em ordem simétrica
<br><br>

**Pós-ordem:**
<br><br>

1. Percorre a subárvore esquerda em pós-ordem
2. Percorre a subárvore direita em pós-ordem
3. Visita a raiz

## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

