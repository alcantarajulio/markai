---
title: Loops for e while
discipline: Laboratório de Programação 1
---

## Loops For
Os laços for, ou loops for, são chamados laços definidos por sabemos quantas vezes ele irá ser rodado, esses laços definidos iteram sobre coleções, repetindo o bloco de códigs até o último item da coleção que está sendo iterada(que está sendo percorrida). A estrutura sintática dos laços é formada pelas palavras reservadas **for** e **in**, por uma variável de controle, uma coleção e pelo bloco de código a ser executado para cada item, ficando assim:
```python
for variavel_de_controle in coleção:
    bloco_de_codigo

```

<br>

### Exemplo 1:
Vamos ao nosso primeiro exemplo:


```python
instrumentos = ["Guitarra", "Bateria", "Saxofone"]

# No exemplo abaixo, o for itera
# sobre a lista instrumentos,
# imprimindo todos os seus elementos.
for instrumento in instrumentos:
    print (instrumento)                           # Imprime Guitarra
                                                  # Imprime Bateria
                                                  # Imprime Saxofone
```

Outro uso bastante comum é iterar pelos índices de uma lista usando as funções auxiliares : range() e len().

### A função range()
Gera uma sequência de números inteiros
A função range é nativa do python e é utilizada quando há a necessidade de se gerar uma sequência de números. Por padrão, a sequência começa do 0 e
vai até o número anterior ao passado como parâmetro (stop), incrementando
de 1 em 1.
```python
x = range(start, stop, step)

# Parâmetros
start: int | optional  # Número inteiro que especifica a posição inicial
stop: int # Número inteiro que especifica a posição final
step: int | optional # Número inteiro que especifica o pulo ou incremento

# Retorno
numbers: list # Lista contendo a sequência de números
```

### A função len()
Retorna o comprimento de um objeto

A função len é nativa do python e é utilizada quando há a necessidade de retornar o comprimento de um objeto. No caso do objeto ser uma string, é retornado a quantidade de caracteres que a string possui. No caso de uma coleção, é retornado a quantidade de elementos que contém.
```python
x = len(obj)

# Parâmetro
object: sequence | collection # Objeto que se quer saber o comprimento, geralmente arrays ou listas

# Retorno
length: int # Comprimento do objeto dado como parâmetro
```
### Exemplo 2:
```python
instrumentos = ["Guitarra", "Bateria", "Saxofone"]

for indice in range(len(instrumentos)):
    print ("O instrumento %s está no índice %d da lista." % (instrumentos[indice], indice))

# Seria o mesmo que executar
# o código abaixo, mas que não
# é nada amigável para listas
# com muitos elementos.
print ("O instrumento %s está no índice %d da lista." % (instrumentos[0], 0))
print ("O instrumento %s está no índice %d da lista." % (instrumentos[1], 1))
print ("O instrumento %s está no índice %d da lista." % (instrumentos[2], 2))

```

## Laços Indefinidos(While)
Os laços indefinidos iteram baseados em uma condição que define se o bloco vai ou não ser executado.

A estrutura sintática dos laços indefinidos é formada pela palavra reservada 'while', por uma condição de execução e pelo bloco de código a ser executado caso a condição seja atendida.
Sua sintaxe é a seguinte:
```python
while condição:
    bloco_de_código
```

### Exemplo 3:
No exemplo abaixo, enquanto o contador for menor do que cinco (condição), o próprio
contador é impresso (bloco).

```python
contador = 0
while contador < 5:
    print (contador)                             # Imprime 0 1 2 3 4
    contador = contador + 1                      # Adiciona 1 ao contador a cada
                                                 # iteração
```

<br>


Outro exemplo bastante comum do uso de laços indefinidos é o emprego de valores booleanos na condição de parada, como pode ser visto no exemplo abaixo.

```python
while True:
    print ("Loop Infinito")
```

<br>

Mas **atenção** como a condição é sempre verdadeira, o bloco é executado infinitas vezes.
No entanto, existe uma maneira de parar a execução infinita do bloco, utilizando a palavra reservada 'break'.

**OBS:** O break pode ser utilizado tanto nos laços definidos, como também nos laços indefinidos.

```python
contador = 0
while True:
    if contador < 5:                            # Se contador for menor que 5, imprime Loop
        print ("Loop")
    else:                                       # Se contador não for menor que 5, para execução do laço
        break
    contador = contador + 1                     # Adiciona 1 ao contador a cada iteração
```
Por fim, algo legal nos laços é que em muitos casos é possível utilizar as duas formas 'while' e 'for', embora existam situações em que um é mais conveniente que o outro para resolver o problema.
