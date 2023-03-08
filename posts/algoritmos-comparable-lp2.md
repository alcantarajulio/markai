---
title: Comparable 
discipline: Laboratório de Programação 2
---

## Comparable 
**Comparable**, este método permite estabelecer uma ordem natural sobre objetos do tipo utilizado para parametrizar a interface. Coleções desses objetos podem então ser ordenadas utilizando métodos pré-definidos.

## Classe Filme.java 


```java
/**
 * Classe que representa um filme, que foi lançado em um ano.
 * 
 * Implementa a interface Comparable, pois assim será possível se comparar
 * em relação a outros filmes.
 * 
 * @author Lucas de Medeiros
 */
public class Filme implements Comparable<Filme> {

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
    
    /**
     * Reescrevendo o método compareTo, que será usado para ordenar
     * filmes por ano.
     * 
     * @param filme filme a ser comparado
     * @return inteiro que representa qual dos dois é o maior, ou igual
     */
    @Override
    public int compareTo(Filme filme) {
        return this.ano - filme.ano;
    }

    // Reescrevendo toString
    @Override
    public String toString() {
        return this.nome + " - " + this.ano;
    }
}

```

## Classe Main.java 

```java

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Classe principal para exemplificar comparable em Java.
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

        // Como cada filme implementa comparable, vai ordenar pelo ano de lançamento.
        Collections.sort(filmes);

        // Imprimindo o array ordenado.
        System.out.println(Arrays.toString(filmes.toArray()));
    }
}

```
## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

## Autor 

Post desenvolvido por Rayane Bezerra da Silva 
