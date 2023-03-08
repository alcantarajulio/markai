---
title: Composição
discipline: Laboratório de Programação 2
---

## Composição

É como se elas se comunicassem, trocassem informações. Ou seja, serve para reutilizar dados, sem ter que criar mais código para isso. Simplesmente passamos a informação - na forma de Objeto - para outro Objeto, e este se encarrega de obter os dados e como trabalhar em cima dele.

## Classes
- Calculadora.java
- Divisao.java
- Main.java
- Multiplicacao.java
- Operação.java
- Soma.java
- Subtração.java

## Calculadora.java

```java
/**
 * Classe que representa uma calculadora simples, que deve ser capaz
 * de realizar as quatro operações básicas.
 * 
 * @author Lucas de Medeiros
 */
public class Calculadora {

    private double valor1;
    private double valor2;
    private Operacao operacao;

    /**
     * Construtor de calculadora a partir dos valores.
     * 
     * @param valor1 primeiro valor
     * @param valor2 segundo valor
     */
    public Calculadora(double valor1, double valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;

        // Garantindo que o valor padrão para a operação seja de soma.
        this.operacao = new Soma();
    }

    /**
     * Método set para a operação.
     * 
     * 
     * @param operacao operação que deve ser feita no método calcular,
     * caracterizando uma composição.
     */
    public void setOperacao(Operacao operacao) {
        this.operacao = operacao;
    }

    /**
     * Calcula o valor a partir da operação.
     * 
     * @return resultado da operação.
     */
    public double calcular() {
        return this.operacao.calcular(this.valor1, this.valor2);
    }
}
```

## Divisao.java
```java
/**
 * Classe que representa a operação de divisão.
 * 
 * @author Lucas de Medeiros
 */
public class Divisao implements Operacao {

    /**
     * Retorna a divisão de dois números.
     * 
     * @param valor1 primeiro valor.
     * @param valor2 segundo valor.
     * @return a divisão de valor1 por valor2.
     * @throws IllegalArgumentException caso valor2 seja igual a 0
     */
    @Override
    public double calcular(double valor1, double valor2) {
        if (valor2 == 0) {
            throw new IllegalArgumentException("O segundo valor não pode ser igual a 0!");
        }

        return valor1 / valor2;
    }
}
```
## Main.java
```java
/**
 * Classe principal para exemplificar composição em Java.
 * 
 * @author Lucas de Medeiros
 */

public class Main {

    public static void main(String[] args) {
        Calculadora calculadora = new Calculadora(5.0, 2.0);

        // Como a operação padrão é soma, imprime o valor da soma entre os números.
        System.out.println(calculadora.calcular());

        Operacao multiplicacao = new Multiplicacao();
        calculadora.setOperacao(multiplicacao);

        // Imprime o valor da multiplicação entre os números.
        System.out.println(calculadora.calcular());

        Operacao subtracao = new Subtracao();
        calculadora.setOperacao(subtracao);

        // Imprime o valor da subtração entre os números.
        System.out.println(calculadora.calcular());

        Operacao divisao = new Divisao();
        calculadora.setOperacao(divisao);

        // Imprime o valor da divisão entre os números.
        System.out.println(calculadora.calcular());
    }
}
```

## Multiplicação.java
```java
/**
 * Classe que representa a operação de multiplicação.
 * 
 * @author Lucas de Medeiros
 */
public class Multiplicacao implements Operacao {

    /**
     * Retorna a multiplicação de dois números.
     * 
     * @param valor1 primeiro valor.
     * @param valor2 segundo valor.
     * @return a multiplicação de valor1 por valor2.
     */
    @Override
    public double calcular(double valor1, double valor2) {
        return valor1 * valor2;
    }
}
```

## Operação.java
```java
/**
 * Interface que representa o contrato que qulquer operação deve seguir
 * em sua implementação.
 * 
 * @author Lucas de Medeiros
 */
public interface Operacao {

    /**
     * 
     */
    public double calcular(double valor1, double valor2);
}
```

## Soma.java

```java
/**
 * Classe que representa a operação de soma.
 * 
 * @author Lucas de Medeiros
 */
public class Soma implements Operacao {

    /**
     * Retorna a soma de dois números.
     * 
     * @param valor1 primeiro valor.
     * @param valor2 segundo valor.
     * @return a soma de valor1 com valor2.
     */
    @Override
    public double calcular(double valor1, double valor2) {
        return valor1 + valor2;
    }
}
```

## Subtração.java

```java
/**
 * Classe que representa a operação de subtração.
 * 
 * @author Lucas de Medeiros
 */
public class Subtracao implements Operacao {

    /**
     * Retorna a multiplicação de dois números.
     * 
     * @param valor1 primeiro valor.
     * @param valor2 segundo valor.
     * @return a subtração de valor1 por valor2.
     */
    @Override
    public double calcular(double valor1, double valor2) {
        return valor1 - valor2;
    }
}
```

## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

## Autor 

Post desenvolvido por Rayane Bezerra da Silva 