---
title: Herança
discipline: Laboratório de Programação 2
---

## Herança 

A herança é um mecanismo da Orientação a Objeto que permite criar novas classes a partir de classes já existentes, aproveitando-se das características existentes na classe a ser estendida. Este mecanismo é muito interessante, pois promove um grande reuso e reaproveitamento de código existente.

Por exemplo, uma classe pode ter várias filhas, mas apenas uma mãe. É a chamada herança simples do java.

<br><br>
<img src ="https://www.alura.com.br/apostila-java-orientacao-objetos/assets/images/orientacaoobjetos/uml-heranca.png" >

## Classes

- Conta.java
- Corrente.java
- Main.java
- Poupança.java

## Conta.java

```java
/**
 * Classe abstrata responsável pela representação de uma conta no sistema.
 * 
 * @author Rick Elton
 */
public abstract class Conta {

    protected int valor;
    private String cpf;

    /**
     * Constrói uma nova instancia de Conta no sistema a partir do CPF.
     *  
     * @param cpf String que representa o cpf do dono da conta.
     */
    public Conta(String cpf) {
        this.cpf = cpf;
        this.valor = 0;
    }

    /**
     * Método que irá realizar depositos na conta.
     * 
     * @param valor Inteiro que representa o valor a ser depositado na conta.
     * @return Inteiro saldo da conta depois do deposito.
     */
    public int depositar(int valor) {
        this.valor += valor;
        return this.valor;
    }

    /**
	 * Sobrescrita do método toString, que vai retornar uma representação em
	 * String de uma instância de Conta, a partir de seus dois campos: cpf, 
	 * e valor(saldo).
	 */
    @Override
    public String toString() {
        return this.cpf + " - saldo: " + this.valor;
    }

    /**
     * Método abstrato para sacar um determinado valor da conta. Já que cada tipo de 
     * conta saca de maneiras diferentes.
     * 
     * @param valor Inteiro que representa o valor a ser sacado da minha conta.
     * @return Inteiro valor que foi sacado da minha conta.
     */
    public abstract int sacar(int valor);
}
```

## Corrente.java
```java
/**
 * Classe que representa o tipo de conta Corrente no sistema.
 * 
 * @author Rick Elton
 */
public class Corrente extends Conta {

    private int ch;

    /**
     * Constrói uma instancia de conta Corrente.
     * 
     * @param cpf String que representa o cpf do dono da conta.
     * @param ch Inteiro que representa o valor a mais que posso sacar.
     */
    public Corrente(String cpf, int ch) {
        super(cpf);
        this.ch = ch;
    }

    /**
     * Método sobrescrito da classe pai(Conta), pois a conta Corrente saca de maneira diferente.
     * Pois o saldo pode ficar negativo.
     * 
     * @return Inteiro valor que foi sacado da minha conta.
     */
    @Override
    public int sacar(int valor) {
        if (this.valor + this.ch >= valor) {
            this.valor -= valor;
        }
        return valor;
    }
}
```

## Main.java
```java
/**
 * Classe Principal do sistema.
 * 
 * @author Rick Elton
 */
public class Main {

    public static void main(String[] args) {

        // Poupanca
        Conta c1 = new Poupanca("123");
        c1.depositar(500);
        System.out.println(c1.toString()); // 123 - saldo: 500
        c1.sacar(200);
        c1.sacar(400); // Saque não vai ser realizado.
        System.out.println(c1.toString()); // 123 - saldo: 300

        // Corrente
        Conta c2 = new Corrente("456", 100);
        c2.depositar(500);
        System.out.println(c2.toString()); // 456 - saldo: 500

        c2.sacar(200);
        c2.sacar(400); // Vou ficar com saldo negativo :(
        System.out.println(c2.toString()); // 456 - saldo: -100

    }

}
```

## Poupança.java

```java
/**
 * Classe que representa uma conta Poupança no sistema.
 * 
 * @author Rick Elton
 */
public class Poupanca extends Conta {

    /**
     * Constrói uma instancia da conta do tipo Poupança no sistema.
     * 
     * @param cpf String que representa o cpf do dono da conta.
     */
    public Poupanca(String cpf) {
        super(cpf);
    }

    /**
     * Método sobrescrito da classe pai(Conta), pois a conta Poupança saca de maneira diferente.
     * Pois o saldo não pode ficar com valor negativo.
     * 
     * @return Inteiro valor que foi sacado da minha conta.
     */
    @Override
    public int sacar(int valor) {
        if (this.valor >= valor) {
            this.valor -= valor;
        }
        return valor;
    }
}
```

## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

## Autor 

Post desenvolvido por Rayane Bezerra da Silva 