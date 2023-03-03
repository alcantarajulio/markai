---
title: Polimorfismo
discipline: Laboratório de Programação 2
---


## Polimofismo

Polimorfismo é a característica única de linguagens orientadas a objetos que permite que diferentes objetos respondam a mesma mensagem cada um a sua maneira.

Em termos de programação, polimorfismo representa a capacidade de uma única referência invocar métodos diferentes, dependendo do seu conteúdo.

Assim, usa-se uma referência da superclasse para armazenar referências para instâncias de subclasses. Entretanto, através dessa “referência genérica” só é possível acessar os métodos das subclasses que pertençam à interface comum com a superclasse.

Quando referências de uma superclasse são utilizadas para referenciar instâncias de subclasses, a compilação fará a checagem pelos tipos da referência. Na hora da execução, porém, o que conta é a classe a qual pertence a instância referenciada. Esse mecanismo que permite ao Java decidir em tempo de execução qual o método que será ativado em função da classe a qual pertence a instância referenciada é chamado de ligação dinâmica.

O fato de Java implementar ligação dinâmica é que permite que o mesmo explore a característica do polimorfismo. Explorando esta característica é possível construir algoritmos genéricos que trabalham com as referências para uma superclasse, mas que se aplicam as subclasses sem a necessidade de testes para determinar o tipo de instância que está sendo referenciada. 


## Classes
  Lembrando que todas essas classes devem estar dentro do mesmo pacote. 
- LinuxMenu.java
- Main.java
- Menu.java
- MeuArray.java
- WindowsMenu.java 

## Classe LinuxMenu.java

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Classe responsável pela representação de um menu Linux.
 * 
 * @author Lucas de Medeiros
 */
public class LinuxMenu implements Menu {

    private List<String> opcoes;

    public LinuxMenu() {
        this.opcoes = new ArrayList<>();
        this.opcoes.add("Sou um menu Linux");
    }

    /**
     * Sobrescrita do método 'exibir' sem parâmetros no contexto de LinuxMenu.
     */
    @Override
    public void exibir() {
        // Implementação do menu Linux...
        System.out.println(Arrays.toString(this.opcoes.toArray()));
    }

    /**
     * Método de LinuxMenu para exibir o menu com as opções dadas.
     * 
     * @param opcoes Opções que serão passadas ao menu.
     */
    @Override
    public void exibir(List<String> opcoes) {
        this.opcoes.addAll(opcoes);
        exibir();
    }
}
```

## Classe Main.java

```java
import java.util.ArrayList;
import java.util.List;

/**
 * Classe principal para exemplificar polimorfismo em Java.
 * 
 * @author Lucas de Medeiros
 */
public class Main {

    /**
     * Chama o método exibir de um menu passado como parâmetro,
     * caracterizando um polimorfismo de subtipo.
     * 
     * @param menu menu que deve ser exibido.
     */
    public static void exibirMenu (Menu menu) {
        menu.exibir(); // Exemplo de polimorfismo de subtipo
    }

    /**
     * Chama o método exibir de um menu passado como parâmetro,
     * mas passando como parâmetros as opções que devem ser
     * exibidas, caracterizando um polimorfismo de sobrecarga.
     * 
     * @param menu menu que deve ser exibido.
     * @param opcoes opções que devem ser passadas ao 
     */
    public static void exibirMenu (Menu menu, List<String> opcoes) {
        menu.exibir(opcoes); // Exemplo de polimorfismo de sobrecarga.
    }

    /**
     * Exemplo de conversão de um número de ponto flutuante em
     * inteiro, caracterizando um exemplo de polimorfismo de
     * coersão.
     */
    public static void conversao() {
        double numero1 = 17.2;
        int numero2 = (int) numero1;

        System.out.println(numero2); // 17
    }

    /**
     * Método genérico para receber um array de qualquer tipo,
     * adicioná-lo à classe genérica MeuArray e imprimi-lo, 
     * caracterizando um exemplo de polimorfismo paramétrico.
     * 
     * @param array array que será impresso.
     */
    public static <T> void imprimeArrayGenerico(T[] array) {
        MeuArray<T> meuArray = new MeuArray<>(array);
        meuArray.print();
    }

    public static void main(String[] args) {
        // Exemplos de polimorfismo de subtipo.
        Menu windowsMenu = new WindowsMenu();
        Menu linuxMenu = new LinuxMenu();
        
        exibirMenu(windowsMenu);
        exibirMenu(linuxMenu);

        // Exemplos de polimorfismo de sobrecarga.
        List<String> opcoes = new ArrayList<>();
        opcoes.add("Iniciar");
        opcoes.add("Abrir navegador");
        opcoes.add("Sair");

        exibirMenu(windowsMenu, opcoes);
        exibirMenu(linuxMenu, opcoes);

        // Exemplo de polimorfismo de coerção.
        conversao();

        // Exemplo de polimorfismo paramétrico (generics)
        Integer[] array1 = {5, 8, 3, 4};
        Double[] array2 = {9.2, 7.1, 8.6};
        String[] array3 = {"Joaquim", "Luciano", "Dedé"};

        imprimeArrayGenerico(array1);
        imprimeArrayGenerico(array2);
        imprimeArrayGenerico(array3);
    }
}
```

## Classe Menu.java

```java
import java.util.List;

/**
 * Interface responsável pela representação de um menu genérico.
 * 
 * @author Lucas de Medeiros
 */
public interface Menu {

    /**
     * Método que exibe o menu.
     */
    void exibir();

    /**
     * Método genérico para exibir o menu com as opções dadas.
     * 
     * @param opcoes Opções que serão passadas ao menu.
     */
    void exibir(List<String> opcoes);
}
```
## Classe MeuArray.java

```java
import java.util.Arrays;

/**
 * Classe responsável pela representação de um array genérico.
 * 
 * @author Lucas de Medeiros
 */
public class MeuArray<T> {
    private T[] array;

    /**
     * Construtor apenas com o tamanho do novo array genérico que será criado.
     * 
     * @param tamanho tamanho do array.
     */
    @SuppressWarnings("unchecked")
    public MeuArray(int tamanho) {
        this.array = (T[]) new Object[tamanho];
    }

    /**
     * Construtor com um array já existente que será passado para o array interno.
     * 
     * @param array array passado.
     */
    public MeuArray(T[] array) {
        this.array = array;
    }

    /**
     * Imprime o array.
     */
    public void print() {
        System.out.println(Arrays.toString(this.array));
    }

    /**
     * Adiciona um novo elemento em determinada posição do array.
     * 
     * @param elemento elemento a ser adicionado.
     * @param pos posição em que deve ser inserido
     * @throws IllegalArgumentException caso a posição a ser inserida seja inválida.
     */
    public void add(T elemento, int pos) {
        if (pos >= this.array.length || pos < 0)
            throw new IllegalArgumentException("Posição inválida!");
        this.array[pos] = elemento;
    }

    /**
     * Remove o elemento de determinada posição do array.
     * 
     * @param pos posição do elemento a ser removido.
     */
    public void remove(int pos) {
        this.array[pos] = null;
    }

    /**
     * Remove a primeira ocorrência de um elemento do array.
     * 
     * @param elemento elemento a ser removido.
     */
    public void remove(T elemento) {
        int contador = 0;
        for (T el : this.array) {
            if (el.equals(elemento)) {
                this.array[contador] = null;
                break;
            } else {
                contador++;
            }
        }
    }
}
```
## Classe WindowsMenu.java

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Classe responsável pela representação de um menu Windows.
 * 
 * @author Lucas de Medeiros
 */
public class WindowsMenu implements Menu {

    List<String> opcoes;

    public WindowsMenu() {
        this.opcoes = new ArrayList<>();
        this.opcoes.add("Sou um menu Windows");
    }
    
    /**
     * Sobrescrita do método 'exibir' sem parâmetros no contexto de WindowsMenu.
     */
    @Override
    public void exibir() {
        // Implementação do menu Windows.
        System.out.println(Arrays.toString(this.opcoes.toArray()));
    }

    /**
     * Método de LinuxMenu para exibir o menu com as opções dadas.
     * 
     * @param opcoes Opções que serão passadas ao menu.
     */
    @Override
    public void exibir(List<String> opcoes) {
        this.opcoes.addAll(opcoes);
        exibir();
    }
}
```

