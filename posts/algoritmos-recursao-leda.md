--- 
title: Recursão
discipline: Laboratório de Estrutura de Dados e Algoritmos 
---

## Recursão

A **recursividade** é nada mais nada menos do que uma função dentro da outra e ela deve ser pensada como uma pilha (estrutura de dados onde o último a entrar, deve ser o primeiro a sair).
<br><br>
Recursividade é o mecanismo de programação no qual uma definição de função ou de outro objeto refere-se ao próprio objeto sendo definido. Assim função recursiva é uma função que é definida em termos de si mesma. Recursividade é o mecanismo básico para repetições nas linguagens funcionais.
<br><br>
O ponto chave da recursão é a função auto se chamar, até chegar na condição de parada, que seria o nosso caso base. Veja como isso se aplicaria na pratica observando o código da função fatorial. 

<br><br>
Pense na pilha como uma torre de Hanoi. 
<br><br>

<img src ="https://cdn.kastatic.org/ka-perseus-images/5b5fb2670c9a185b2666637461e40c805fcc9ea5.png">
<br>

Por exemplo, o disco roxo foi o primeiro a ser inserido, porém será o último a sair. 


## Entendendo recursão 

A imagem abaixo ilustra o passo a passo da implementação do algoritmo recursivo do fatorial. 
<br><br>
<img src = "http://www.linhadecodigo.com.br/artigos/img_artigos/Ricardo_Alves/Java_Recursividade/image002.jpg">

## Algoritmo do Fatorial recursivo em Java

```java 
ackage material.recursao;

public class Fatorial {
  public static void main(String[] args) {
    Fatorial r = new Fatorial();
    int resp = r.fatorial(3);
    System.out.println(resp);
  }
    
  /**
   * Calcula o valor do fatorial para um número qualquer positivo.
   * 
   * @param x - valor que será calculado o fatorial.
   * @return O valor do fatorial.
   */
  public int fatorial(int x) {
    // Se x for igual a 0 (zero) então retorna 1.
    if (x == 0)
      return 1;
        
    /* Para qualquer outro número, calcula o seu valor multiplicado
       pelo fatorial de seu antecessor. */
    return x * fatorial(x - 1);
  }
}
```

## Fontes 

- <a href="http://www.linhadecodigo.com.br/artigo/3316/recursividade-em-java.aspx" target="_blank"> Linha de código </a>
- <a href="https://www.google.com/search?q=introdu%C3%A7%C3%A3o+recusao+em+java&source=lmns&bih=958&biw=2560&client=ubuntu&hs=MoZ&hl=pt-BR&sa=X&ved=2ahUKEwjpmKP-u8f9AhW9jZUCHdmqAcYQ_AUoAHoECAEQAA" target ="_blank"> Pai dos burros </a>

## Autor

Post desenvolvido por Rayane Bezerra da Silva 