---
title: Junit
discipline: Laboratório de Programação 2
---

## Junit

**Junit** é um framework que facilita o desenvolvimento e execução de testes unitários em código Java.Ele fornece uma completa API (conjunto de classes) para construir os testes e Aplicações gráficas e em modo console para executar os testes criados.

<br>
Os principais motivos que favorecem o uso desse framework são:
<br>

- **Junit** pode verificar se cada unidade de código funciona da forma esperada;
- Facilita a criação, execução automática de testes e a apresentação dos resultados;
- É Orientado a Objeto;
- É free e pode ser baixado em: www.junit.org

## Como Instalar O Junit 

Para usar o **Junit** em sua máquina basta ter em mente essas duas idéias:

<br> 

- Caso você não tenha o Junit instalado, faça o download do arquivo junit.jar em www.junit.org, após inclua-o no classpath para compilar e rodar os programas de teste.
- Porém o Junit já vem configurado nas versões recentes de IDE’s como Eclipse, NetBeans, JBuilder, BlueJ e outros.

## Planejando os testes no Junit 

Metodologias ágeis como Extreme Programming, exigem organização e disciplina, portanto é sugerido que você faça um bom planejamento antes de sair por aí escrevendo código feito um doido.
<br><br>

A lista abaixo exemplifica bem como você pode planejar e executar seus testes:

- Defina uma lista de tarefas a implementar (o que testar);
- Escreva uma classe (test case) e implemente um método de teste para uma tarefa da lista;
- Rode o JUnit e certifique-se que o teste falha;
- Implemente o código mais simples que rode o teste;
- Refatore o código para remover a duplicação de dados; 
- Caso necessário, escreva mais um teste ou refine o existente; 
- Faça esses passos para toda a lista de tarefas;

## Arquitetura das classes no Junit 

Para uma melhor compreensão de como o JUnit funciona é importante que entenda como suas classes estão organizadas dentro da API do framework 
<br><br>
<img src ="https://www.devmedia.com.br/imagens/javamagazine/mpjuiiujfig05.jpg" 
widht= "600" heoight="400">

## Classes

- Animal.java
- PetShop.java
- PetShopTest.java

## Animal.java
```java
/**
 * Classe responsável pela representação de um animal cadastrado no PetShop.
 * 
 * @author Lucas de Medeiros
 */
public class Animal {
	
	private static int IDADE_ZERO = 0;
	
	private String nome;
	private String especie;
	private int idade;
	
	/**
	 * Constrói um novo animal a partir do seu nome, espécie e idade.
	 * 
	 * @param nome nome do animal.
	 * @param especie espécie do animal.
	 * @param idade idade do animal.
	 * @throws IllegalArgumentException.
	 */
	public Animal (String nome, String especie, int idade) throws IllegalArgumentException {
		if (nome == null || nome.trim().isEmpty())
			throw new IllegalArgumentException("Erro ao cadastrar animal: nome inválido.");
		
		if (especie == null || especie.trim().isEmpty())
			throw new IllegalArgumentException("Erro ao cadastrar animal: raça inválida.");
		
		if (idade < IDADE_ZERO)
			throw new IllegalArgumentException("Erro ao cadastrar animal: idade inválida.");
		
		this.nome = nome;
		this.especie = especie;
		this.idade = idade;
	}
	
	// Getters que serão necessários na classe PetShop.

	public String getNome() {
		return nome;
	}
	
	public int getIdade() {
		return idade;
	}
	
	// Sobrescrita dos métodos hashCode() e equals()

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((especie == null) ? 0 : especie.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Animal other = (Animal) obj;
		if (especie == null) {
			if (other.especie != null)
				return false;
		} else if (!especie.equals(other.especie))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}
	
}
```

## PetShop.java

```java
/**
 * Classe que é responsável pela gerenciamento de animais, representando, assim,
 * o controlador do PetShop.
 * 
 * @author Lucas de Medeiros
 */

public class PetShop {
	
	private static int TAMANHO_ARRAY_ANIMAIS = 5;
	private Animal[] animais;
	private int totalAnimaisCadastrados;
	
	/**
	 * Constrói o PetShop, inicializando o array de animais, com tamanho fixo
	 * igual a 5, como definido em alguma especificação.
	 */
	public PetShop () {
		animais = new Animal[TAMANHO_ARRAY_ANIMAIS];
		totalAnimaisCadastrados = 0;
	}
	
	/**
	 * Esse método cadastra um novo animal no sistema. No sistema, só são
	 * permitidos animais com nomes diferentes, independentemente de suas
	 * espécies.
	 * 
	 * @param nome nome do animal.
	 * @param especie espécie do animal.
	 * @param idade idade do animal.
	 * @return <tr>true</tr> se o animal foi cadastrado com sucesso, caso 
	 * contrário, <tr>false</tr>.
	 */
	public boolean cadastrarAnimal(String nome, String especie, int idade) {
		int total = this.totalAnimaisCadastrados();
		boolean cadastrou = false;
		
		if (total < TAMANHO_ARRAY_ANIMAIS && !animalExiste(nome)) {
			this.animais[total] = new Animal(nome, especie, idade);
			cadastrou = true;
			atualizaTotal();
		}
		
		return cadastrou;
	}

	/**
	 * Esse método itera sobre o array de animais para verificar a existência de um
	 * animal com o nome especificado.
	 * 
	 * @param nome nome do animal.
	 * @return <tr>true</tr> se o animal existe, caso contrário, <tr>false</tr>.
	 */
	public boolean animalExiste(String nome) {
		boolean existe = false;
		
		if (nome != null) {
			for (int i = 0; i < TAMANHO_ARRAY_ANIMAIS; i++) {
				if (this.animais[i] != null &&
						this.animais[i].getNome().toLowerCase().equals(nome.toLowerCase())) {
					existe = true;
				}
			}
		}
		
		return existe;
	}
	
	/**
	 * Esse método itera sobre o array de animais para saber a média de idade dos
	 * animais cadastrados no PetShop.
	 * 
	 * @return double que representa a média de idade dos animais cadastrados no 
	 * sistema.
	 */
	public double mediaIdade() {
		double media = 0.0;
		int total = totalAnimaisCadastrados();
		
		if (total > 0) {
			int soma = 0;
			
			for (int i = 0; i < TAMANHO_ARRAY_ANIMAIS; i++) {
				if (this.animais[i] != null) {
					soma += animais[i].getIdade();
				}
			}
			
			media = ((double) soma / total);
		}
		
		return media;
	}
	
	/**
	 * Esse método retorna o número de animais que foram cadastrados no PetShop.
	 * 
	 * @return inteiro que representa o total de animais cadastrados no sistema.
	 */
	public int totalAnimaisCadastrados() {
		return this.totalAnimaisCadastrados;
	}
	
	/**
	 * Esse método atualiza a contagem de animais cadastrados no sistema,
	 * sempre aumentando de um em um.
	 */
	private void atualizaTotal() {
		this.totalAnimaisCadastrados++;
	}

}
```

## PetShopTest.java

```java
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class PetShopTest {
	
	private PetShop petShop;
	
	@BeforeEach
	public void setUp() {
		petShop = new PetShop();
	}
	
	// testes para os casos em que alguma exceção será lançada.

	@Test
	public void testCadastrarAnimalNomeInvalido() {
		assertThrows(IllegalArgumentException.class, 
				() -> petShop.cadastrarAnimal(null, "Gato", 10));
		
		assertThrows(IllegalArgumentException.class, 
				() -> petShop.cadastrarAnimal("", "Gato", 10));
		
		assertThrows(IllegalArgumentException.class, 
				() -> petShop.cadastrarAnimal("    ", "Gato", 10));
	}
	
	@Test
	public void testCadastrarAnimalEspecieInvalida() {
		assertThrows(IllegalArgumentException.class, 
				() -> petShop.cadastrarAnimal("Julieta", null, 10));
		
		assertThrows(IllegalArgumentException.class, 
				() -> petShop.cadastrarAnimal("Julieta", "", 10));
		
		assertThrows(IllegalArgumentException.class, 
				() -> petShop.cadastrarAnimal("Julieta", "   ", 10));
	}
	
	@Test
	public void testCadastrarAnimalIdadeInvalida() {
		assertThrows(IllegalArgumentException.class, 
				() -> petShop.cadastrarAnimal("Julieta", "Gato", -1));
	}
	
	// testes para casos válidos.
	
	@Test
	public void testCadastrarAnimalValido() {
		assertTrue(petShop.cadastrarAnimal("Julieta", "Gato", 8));
		assertFalse(petShop.cadastrarAnimal("Julieta", "Cachorro", 10));
	}

	@Test
	public void testAnimalExiste() {
		assertFalse(petShop.animalExiste("Aderbaldo"));
		petShop.cadastrarAnimal("Aderbaldo", "Gato", 8);
		assertTrue(petShop.animalExiste("Aderbaldo"));
		assertTrue(petShop.animalExiste("AdErBaLdO"));
	}

	@Test
	public void testMediaIdade() {
		assertEquals(0, petShop.mediaIdade(), 0.01);
		petShop.cadastrarAnimal("Aderbaldo", "Gato", 8);
		petShop.cadastrarAnimal("Aderbaldo", "Sapo", 5); // não deve cadastrar, pois já existe.
		assertEquals(8, petShop.mediaIdade(), 0.0001);
		petShop.cadastrarAnimal("Julieta", "Cachorro", 3);
		petShop.cadastrarAnimal("Garfield", "Gato", 5);
		assertEquals(5.3, petShop.mediaIdade(), 0.04);
	}

	@Test
	public void testTotalAnimaisCadastrados() {
		assertEquals(0, petShop.totalAnimaisCadastrados());
		petShop.cadastrarAnimal("Aderbaldo", "Gato", 8);
		assertEquals(1, petShop.totalAnimaisCadastrados());
		petShop.cadastrarAnimal("Aderbaldo", "Gato", 3);
		assertEquals(1, petShop.totalAnimaisCadastrados());
	}

}
```

## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>
2. <a href="https://pt.wikipedia.org/wiki/JUnit" target="_blank" > Wikipedía</a>

## Autor 

Post desenvolvido por Rayane Bezerra da Silva 