---
title: Comparator 
discipline: Laboratório de Programação 2
---

## Comparator 

**Comparator** é uma função de comparação, que fornece uma ordenação para coleções de objetos que não possuem uma ordenação natural. O implementador desta classe precisa substituir o método abstrato compare() definido em java. util. **Comparator**, que compara seus dois argumentos para ordem.

## Classes

- Filmes.java
- FilmeComparadorPorAno.java
- Main.java

## Filme.java

```java
/**
 * Classe que representa um filme, que foi lançado em um ano.
 * 
 * @author Lucas de Medeiros
 */
public class Filme {

    private String nome;
    private int ano;

    /**
     * Construtor a partir do nome a ano do filme.
     * 
     * @param nome nome do filme
     * @param ano ano do filme
     */
    public Filme(String nome, int ano) {
        this.nome = nome;
        this.ano = ano;
    }

    // Getters para ano e nome

    public int getAno() {
        return ano;
    }

    public String getNome() {
        return nome;
    }

    // Reescrevendo toString
    @Override
    public String toString() {
        return this.nome + " - " + this.ano;
    }
}
```

## FilmeComparadorPorAno.java
```java
import java.util.Comparator;

/**
 * Classe que vai ser a responsável pela implementação do comparador de dois filmes
 * pelos seus respectivos anos de lançamento.
 * 
 * @author Lucas de Medeiros
 */
public class FilmeComparadorPorAno implements Comparator<Filme> {

    /**
     * Reescreve função compare, comparando dois filmes pelo ano.
     * 
     * @param f1 primeiro filme a ser comparado
     * @param f2 segundo filme a ser comparado
     * @return inteiro que representa se um dos filmes é maior, ou se são iguais.
     */
    @Override
    public int compare(Filme f1, Filme f2) {
        return f1.getAno() - f2.getAno();
    }
}
```
## Main.java

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * Classe principal para exemplificar comparator em Java.
 * 
 * @author Lucas de Medeiros
 */

public class Main {

    public static void main(String[] args) {
        Filme filme1 = new Filme("Homem-Aranha", 2002);
        Filme filme2 = new Filme("João e Maria: caçadores de bruxas", 2013);
        Filme filme3 = new Filme("A volta dos que não foram", 2002);

        List<Filme> filmes = new ArrayList<>();
        filmes.add(filme1);
        filmes.add(filme2);
        filmes.add(filme3);

        // Criação de um comparator com funções lambda
        Comparator<Filme> comparadorPorAnoLambda = 
            (f1, f2) -> f1.getAno() - f2.getAno();
        
        // Criação de um comparator (método convencional)
        Comparator<Filme> comparatorPorAnoConvencional = new FilmeComparadorPorAno();

        // Você pode usar o comparator por lambda também, mas para o exemplo, vamos usar o convencional.
        filmes.sort(comparatorPorAnoConvencional);

        // Imprimindo o array ordenado pelos respectivos anos de publicação.
        System.out.println(Arrays.toString(filmes.toArray()));
    }
}
```
## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

## Autor 

Post desenvolvido por Rayane Bezerra da Silva 