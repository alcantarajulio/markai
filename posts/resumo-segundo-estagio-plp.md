---
title: Resumo do Segundo Estágio
discipline: Paradigmas de Programação
---

## Motivação
Necessidade de novas linguagens de programação que:

- Permitam que programas sejam escritos de forma clara, concisa e com um alto nível de abstração
- Suportem componentes de software reutilizáveis
- Incentivem o uso de verificação formal
- Permitam a prototipagem rápida

## Introdução LPs imperativas:

LPs como Fortran, Java, C são classificadas como imperativas, pois baseiam sua programação na modificação do estado de variáveis:
<br></br>
<img src="https://i.imgur.com/ILpPKvF.png" alt="modificacao_imperativa" height="175px" width="700px">
<br></br>
- Mudanças de estado são tipicamente realizadas usando comandos de atribuição
- Comandos condicionais e de repetição impõem fluxos de execução 
- O programa é um conjunto de instruções que indicam como mudar o estado das variáveis

## Paradigma Funcional:
- Forte ruptura do modelo imperativo
- Um programa funcional é essencialmente uma função que pode ser uma composição de funções
- Assumindo um programa funcional, sua saída é completamente determinada pelas entradas que recebe
- Programação funcional é baseada no conceito de funções matemáticas
- Recursões e expressões condicionais, ao invés de sequenciamento e iterações
- Transparência Referencial sem efeitos colaterais (não há alteração de estado)!
- Funções são valores de primeira ordem
- Tem como objetivo imitar as funções matemáticas
<br></br>
<img src="https://i.imgur.com/Wws1gEY.png" alt="funcoes_haskell_matematicas" height="175px" width="500px">
<br></br>
Na programação funcional não existe a noção de estado e não existe a necessidade de instruções de atribuição. Diferença:
- Imperativa:
<br></br>
<img src="https://i.imgur.com/0SMkJ8l.png" alt="ex_imperativa" height="300px" width="450px">
<br></br>

- Funcional:
```python
sum[1..10] = sum[1,2,3,4,5,6,7,8,9,10]

            = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 +10

            = 3 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

            = 6 + 4 + 5 + 6 + 7 + 8 + 9 + 10

            ...

            = 55 
```
<br>

## - Por que Estudar Programação Funcional?
	* Visão clara de conceitos fundamentais:
		* Abstração de dados
		* Recursão
		* Genericidade, polimorfismo, sobrecarga
	* Programação com um alto nível de abstração, possibilitando:
		* Alta produtividade
		* Programas mais concisos
		* Menos erros
		* Provas de propriedades sobre programas

- Usos Práticos: Compiladores, provadores de teoremas, sistemas Web, serviços de chat de grande escala, IA etc.

## Haskell
- Linguagem funcional pura de uso genérico, concebida para ensino e também para o	desenvolvimento de aplicações reais.
- Estaticamente e fortemente tipada
- Puramente funcional, ou seja, não possui variáveis, nem outras características imperativas
- Possui avaliação preguiçosa (lazy evaluation)
- Permite definir listas infinitas

## Valores e Tipos:
Em Haskell escrevemos e::T para indicar que a expressão e admite o tipo T. Tipos primitivos:
- Bool
- Char
- String
- Int
- Integer
- Float
- Double

Em Haskell, toda função requer uma prototipação de tipos. Sequência dos argumentos da função, sendo o último tipo o do valor de retorno da função.

#### Tipos e Classes
Haskell tem um vasto repertório de tipos compostos:
- Tuplas
- Uniões Disjuntas
- Listas
- Funções

#### Funções
Funções em Haskell são normalmente definidas pelo uso de equações. Um dos pontos chaves da programação funcional é o uso da composição de funções.
<br></br>

![ex_funcao_haskell](https://i.imgur.com/ty9S9El.png)
<br></br>
Linguagens funcionais normalmente oferecem diversos mecanismos para definição de funções, em Haskell:
- Expressões condicionais
- Alternativas com guardas
- Casamento de padrões
- Expressões Case
- Expressões Lambda

##### Expressões Condicionais
Usa uma expressão lógica para escolher entre dois resultados de mesmo tipo. O ELSE é obrigatório, caso contrário, se a condição do if não fosse satisfeita, não haveria retorno.

![ex_funcao_haskell_if](https://i.imgur.com/gt7fiTM.png)

##### Alternativas com guardas
Expressão multidirecional para escolher entre uma sequência de resultados de mesmo tipo. As guardas permitem estabelecer uma distinção entre casos diferentes da definição de uma função.

![ex_guardas](https://i.imgur.com/Fb9YOAZ.png)

##### Casamento de Padrões
Uma sequência de “padrões” é usada para escolher entre uma sequência de valores de mesmo tipo. Se existe um match (casamento) entre o padrão e o argumento, este é escolhido e demais não são testados

![casamento_de_padrao](https://i.imgur.com/9XotoFb.png)

##### Cláusulas where
Equivalentes às“variáveis locais”, mas não iguais! Evitam a repetição de código e recálculos.
<br></br>
![clausula_where](https://i.imgur.com/lfZfXiw.png)
<br></br>

#### Listas
Em Haskell, listas são estruturas de dados homogêneas, ou seja, armazenam elementos de mesmo tipo.
<br></br>
<img src="https://i.imgur.com/8eYepq1.png" alt="listas_haskell" height="115px" width="400px" >
<br></br>
Uma lista é composta sempre de dois segmentos:

- Cabeça (head) = primeiro elemento
- Corpo (tail) = resto da lista

![head_tail_haskell](https://i.imgur.com/EJukRMK.png)
<br></br>
Para definir, podemos indicar os limites inferior e superior de um conjunto conhecido, onde existe uma relação de ordem entre os elementos e uma progressão aritmética em uma lista
<br></br>
<img src="https://i.imgur.com/ROroXlB.png" alt="definindo_listas" height="200px" width="150px" >
<br></br>
Como resolver funções em listas?
- Problema: somar os elementos de uma lista.
- Solução: Recursividade
	* Caso base: listavazia[ ] e sumList[ ] = 0 
	* Caso recursivo: sumList (a:as) = a + sumList as
<br></br>
<img src="https://i.imgur.com/zXNo1sK.png" alt="funcao_lista" height="150px" width="500px" >
<br></br>
Na matemática, é comum definir um conjunto partir de outro usando notação em compreensão, uma lista pode ser feita em termos dos elementos de outra
<br></br>
<img src="https://i.imgur.com/rzMFyi8.png" alt="compreesao" height="90px" width="500px" >
<br></br>
Além das listas para sequências finitas ([1,2,3]), podemos também usar listas para representar sequências infinitas
<br></br>
<img src="https://i.imgur.com/sGoBVdC.png" alt="listas_infinitas" height="110px" width="400px" >
<br></br>
Haskell e a maioria das LPS funcionais fazem uso da avaliação preguiçosa (lazy evaluation). Nesse caso, os argumentos de funções são analisados somente quando são utilizados e apenas partes da estrutura são avaliadas.
<br></br>
<img src="https://i.imgur.com/as0dSK5.png" alt="lazy_evaluation" height="100px" width="450px" >

<br>

## Polimorfismo:
Função pode ter tipos genéricos associados

<br>

<img src="https://i.imgur.com/EefvY3m.png" alt="Tipos Genéricos" height="110px" width="500px" img-align="left">

<br>

## Funções de Ordem Superior
- Podem:
	* Receber funções como argumento
	* Produzir funções como resultado
- Permitem:
	* Definições polimórficas
	* Funções aplicadas sobre uma coleção de tipos
	* Padrões de recursão usados por várias funções
	* Aumentam reuso de código e	modularidade
- Uma função para mapeamento deve receber os seguintes argumentos:
	* Uma função de transformação 
	* Uma lista de elementos a serem transformados
<br>

A linguagem Haskell possui a implementação de uma função de mapeamento, chamada map:

<br>
<p>
<img src="https://i.imgur.com/lIbPICN.png" alt="Função Map" height="115px" width="500px">
</p>

<br></br>

## Fontes 

<a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

## Nota 
Olá, talvez você ache que algumas das imagens do post poderiam ter um tamanho mais adequado, e eu concordo, mas como o resumo não é meu e as imagens também não, para manter a qualidade das imagens optei por esses tamanhos, mas caso você saiba algum modo de aumentar sem perder a qualidade, fique a vontade para ajudar. :)