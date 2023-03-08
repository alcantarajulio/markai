---
title: Fatorial com python
discipline: Laboratório de Programação 1
---

## Como fazer um fatorial usando python?
### Fatorial iterativo:
O código abaixo realiza 
Abra se editor de código, cole e execute o código abaixo do **fatorial** do número passado por parâmetro e o retorna. O fatorial de um número é dado pelo produto de todos os números positivos menores ou iguais a esse número, excetuando-se 0, cujo fatorial tem valor 1. Essa função utiliza uma abordagem iterativa para a realização do cálculo.
Essa função possui como parâmetros:
number: Um inteiro, que representa o número cujo o **fatorial** será calculado.

Essa função retona um inteiro chamado *fatorial*  que representa o valor do fatorial calculado.

<br>


```python
def iterative_factorial(number):
    assert (number >= 0) # Fatorial só pode ser calculado para não-negativos

    factorial = 1
    if (number != 0):
        for n in range(1, number + 1):
            factorial *= n
    return 
    
print ("ABORDAGEM ITERATIVA\n")
print ("O fatorial de 0 é", iterative_factorial(0))
print ("O fatorial de 1 é", iterative_factorial(1))
print ("O fatorial de 2 é", iterative_factorial(2))
print ("O fatorial de 5 é", iterative_factorial(5))
print ("O fatorial de 15 é", iterative_factorial(15))
```

<br>

### Fatorial Recursivo:
Nesse segundo exemplo nós temos um fatorial recursivo que realiza o cálculo do fatorial do número passado por parâmetro e o retorna. O fatorial de um número é dado pelo produto de todos os números positivos menores ou iguais a esse número, excetuando-se 0, cujo fatorial tem valor 1. Essa função utiliza uma abordagem recursiva para a realização do cálculo.
Essa função possui como parâmetros:
number: Um inteiro que representa o número cujo fatorial será calculado
Essa função possui como retorno:
factorial: Um int que representa o valor do fatorial calculado

<br>

```python
def recursive_factorial(number):
    assert (number >= 0) # Fatorial só pode ser calculado para não-negativos

    if (number == 0):
        return 1
    else:
        return (number * recursive_factorial(number - 1))
        
# DEMONSTRAÇÃO
#
# O código abaixo pode ser executado para observação do funcionamento
# das funções implementadas anteriormente.

print ("\nABORDAGEM RECURSIVA\n")
print ("O fatorial de 0 é", recursive_factorial(0))
print ("O fatorial de 1 é", recursive_factorial(1))
print ("O fatorial de 2 é", recursive_factorial(2))
print ("O fatorial de 5 é", recursive_factorial(5))
print ("O fatorial de 15 é", recursive_factorial(15))
```

## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

## Autor 

Post desenvolvido por Eduarda Farias 