---
title: Condicionais
discipline: Laboratório de Programação 1
---

Os condicionais são estruturas responsáveis por causar desvio de fluxo a partir do valor de uma expressão lógica. Em outras palavras, é o
valor de uma condição (verdadeira ou falsa) que determinará se um blo-
co de código será ou não executado. Em Python, os condicionais são **if**,
**elif** e **else**.
O **if** é uma estrutura condicional simples e sua sintaxe é da forma "if 
(condição):".
### Exemplo:
```python
if 2 + 2 == 4:
    print("Sim")
```

<br>

Caso a condição seja verdadeira, o bloco de código após
os dois pontos será executado, caso contrário, não. 
Em termos de algoritmos, nós temos que, **se** a condição for atendida **então** faça alguma coisa
(que será especificado na linha abaixo da condicional)

O **elif** é uma estrutura condicional aninhada e sua sintaxe é da forma, funciona como um segundo if.
### Exemplo:
```python
nome1 = maria
nome2 = joao
nome3 = pedro
if nome1 == nome2:
    print("São iguais")
elif nome1 == nome3:
    print("São iguais")   
```

<br>

O bloco de código com a condicional **elif** só será executado se a primeira condicional
(nome1 == nome2) for falsa, mas ainda assim, ele também será executado **APENAS** se a segunda
condição for verdadeira, se nenhuma das duas forem verdadeiras, ele não faz nada.
Então, funciona assim, se a primeira condicional não for verdadeira, então ele testa a segunda, 
caso a segunda também não seja verdadeira, ele não faz nada, porque não foi especificado que ele deveria fazer alguma coisa.
Sendo assim, temos um comando condicional, o **else** será executado apenas se todas as condições anteriores forem falsas.


Bem, agora, mãos a massa! Abra seu editor de texto e cole e execute o código do exemplo abaixo.

### Exemplo:

```python

value = int(input("Insira um número: "))

if (value > 1):
    print ("O número digitado é maior que um.")
if (value > 10):
    print ("O número digitado é maior que dez.")
if (value > 100):
    print ("O número digitado é maior que cem.")


if (value < 0):
    print ("O número digitado é negativo.")
elif (value > 0):
    print ("O número digitado é positivo.")


if ((value % 2) == 0):
    print ("O número digitado é par.")
else:
    print ("O número digitado é ímpar.")


if (0 <= value < 10):
    print ("O número digitado está entre 0 e 10.")
elif (10 <= value < 20):
    print ("O número digitado está entre 10 e 20.")
elif (20 <= value <= 100):
    if (20 <= value < 50):
        print ("O número digitado está entre 20 e 50.")
    else:
        print ("O número digitado está entre 50 e 100.")
else:
    print ("O número não está entre 0 e 100.")

```