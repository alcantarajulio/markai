---
title: Equals-Hashcode-ToString
discipline: Laboratório de Programação 2
---

## Equals

O método ***equals** é utilizado para comparações. A classe String e as classes Wrapper sobrescrevem equals() para garantir que dois objetos desses tipos, 
com o mesmo conteúdo, possam ser considerados iguais.

## Hashcode

Já o **hashCode()** é uma ferramenta da JVM – Java Virtual Machine usado para montar a tabela hash de modo correto. Em outras palavras, temos que elementos podem ser armazenados em estruturas onde a informação é referenciada por uma chave.

## ToString

O método **toString** retorna uma representação string de um objeto. Na classe Object, este método está escrito de maneira a retornar o nome da classe da qual o objeto é instância, o sinal de arroba “@”, e a representação hexadecimal sem sinal do código hash do objeto.

## Classes

Lembrando que todas essas classes devem estar no mesmo pacote.
- Main.java
- Pessoa.java

## Main.java

```java
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * Classe principal para exemplificar os métodos equals, hashCode
 * e toString.
 * 
 * @author Lucas de Medeiros
 */

public class Main {

	public static void main(String[] args) {
		Pessoa pessoa1 = new Pessoa("Lucas", "65314789650", 20);

		// USO DE TOSTRING()

		System.out.println(pessoa1.toString()); 
		// imprime representação em string de uma pessoa.

		System.out.println(pessoa1); 
		// equivalente à de cima, pois aqui o método toString é chamado por padrão.

		// USO DE EQUALS()

		Pessoa pessoa2 = new Pessoa("Lucas", "65314789650", 20);
		Pessoa pessoa3 = new Pessoa("Lucas", "65314789650", 19);
		Pessoa pessoa4 = new Pessoa("Lucas", "57695421507", 20);
		Pessoa pessoa5 = new Pessoa("Aderbaldo", "65314789650", 20);

		System.out.println(pessoa1.equals(pessoa2)); // true
		System.out.println(pessoa1.equals(pessoa3)); // true

		/*
			Note que duas pessoas, mesmo tendo idades diferentes, vão ser
			iguais por causa da implementação do equals na classe Pessoa.
		*/

		System.out.println(pessoa1.equals(pessoa4)); // false
		System.out.println(pessoa1.equals(pessoa5)); // false

		// USO DE HASHCODE

		Set<Pessoa> set = new HashSet<>();
		set.add(pessoa1);
		set.add(pessoa2);
		set.add(pessoa3);
		set.add(pessoa4);
		set.add(pessoa5);

		/*
			Como pessoa1, pessoa2 e pessoa3 são iguais pelo equals(),
			o hashCode delas será igual, então ao adicionar em um
			HashSet, por exemplo, que não tem elementos repetidos e
			internamente faz a checagem pelo hashCode, só serão
			adicionados de fato pessoa1, pessoa4 e pessoa5.
		*/

		System.out.println(set.size()); // 3
		System.out.println(Arrays.toString(set.toArray()));
		// imprime a representação em string o conjunto.
	}
}
```

## Pessoa.java

```java
/**
 * Classe responsável pela representação de uma pessoa no sistema.
 * 
 * @author Lucas de Medeiros
 */

public class Pessoa {
	
	private String nome;
	private String cpf;
	private int idade;
	
	/**
	 * Constrói uma nova instância de Pessoa no sistema, a partir de um nome, 
	 * CPF e idade.
	 * 
	 * @param nome nome da pessoa.
	 * @param cpf CPF da pessoa.
	 * @param idade idade da pessoa.
	 */
	public Pessoa(String nome, String cpf, int idade) {
		this.nome = nome;
		this.cpf = cpf;
		this.idade = idade;
	}

	/**
	 * Sobrescrita do método hashCode, que vai gerar um número inteiro único a 
	 * partir dos campos CPF e nome.
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((cpf == null) ? 0 : cpf.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		return result;
	}

	/**
	 * Sobrescrita do método equals, que vai comparar uma instância de pessoa
	 * com alguma outra instância. Retorna <tr>true</tr> se as instâncias
	 * forem iguais, <tr>false</tr>, caso contrário.
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pessoa other = (Pessoa) obj;
		if (cpf == null) {
			if (other.cpf != null)
				return false;
		} else if (!cpf.equals(other.cpf))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}

	/**
	 * Sobrescrita do método toString, que vai retornar uma representação em
	 * String de uma instância de Pessoa, a partir de seus três campos: nome, 
	 * CPF e idade.
	 */
	@Override
	public String toString() {
		return "Nome: " + this.nome + ", CPF: " + this.cpf + ", Idade: " + this.idade + " anos.";
	}
}
```
## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

## Autor 

Post desenvolvido por Rayane Bezerra da Silva 