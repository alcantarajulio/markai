---
title: Resumo de Programação 1
discipline: Programação 1
---
## Ementa

- Conceitos básicos de linguagens de programação
- Algoritmos
- Noções básicas de programação
- Resolução de problemas
- Tipos de dados
- Entrada e Saída
- Decisões 
- Laços
- Funções
- Noções de estruturas de dados
- Técnicas básicas de boa programação
- Tratamento de erros
- Testes

## Visão Geral

Em Programação 1 você irá aprender conceitos básicos de programação. Ao fim da disciplina, você saberá usar estruturas de condição, de repetição e algumas estruturas de dados.

A cadeira é dividida em 10 unidades, se você concluir pelo menos 7 unidades, você paga a cadeira.

As 10 unidades consistem em:

1. Conceitos elementares de programação
2. Escrevendo programas simples
3. Condições (if, elif e else)
4. For (Laços Definidos)
5. While (Laços Indefinidos)
6. Funções
7. Arrays
8. Listas
9. Matrizes (No formato de Lista de Listas)
10. Dicionário

## Dicas

- A cada semana, resolva as questões do TST da sua unidade atual e da posterior a ela. As questões do TST são muito semelhantes às das provas.

- Às vezes, tentar entender a questão no papel ao invés de ir diretamente escrever o código pode economizar tempo e facilitar a compreensão.

- Além das questões do TST, existem as do [URI](https://www.urionlinejudge.com.br/judge/pt/login), um site onde mais de 200 questões para iniciantes podem ser encontradas, elas irão reforçar seu aprendizado e melhorar sua interpretação de problemas. Porém, é importante que as questões do TST sejão seu foco.

- Preste sempre atenção no tempo durante os minitestes práticos, nem sempre vale a pena abrir mesmo que em uma unidade facil uma nova questão e arriscar perder alguns pontos por não dar tempo.

- Sempre procure outras formas de aprender fora da sala de aula, procure alguma coisa que goste de fazer, um projeto, como um jogo, uma página web de um conteúdo algo que gosta, todo contato com a lógica de programar é bom.

---
## Livros e Apostilas

- [Free-programming-books](https://github.com/EbookFoundation/free-programming-books/blob/master/free-programming-books-pt_BR.md#python)

## Plataformas de Estudo

- [Codecademy](http://www.codecademy.com/)
- [Gibbon](https://gibbon.co/topics/programming)
- [Udacity](https://br.udacity.com)
- [Learn Python the Hard Way](http://learnpythonthehardway.org/book/)
- [University of Reddit](http://ureddit.com/category/23442/computer-science)
- [Udemy](https://www.udemy.com/pt/)

## Ferramentas

- [Python Tutor](http://www.pythontutor.com/visualize.html#mode=edit)

## Exercícios

- [Exercism](https://exercism.io/)
- [Coding Bat](https://codingbat.com/python)
- [Codewars](https://www.codewars.com/)
- [Coding Game](https://www.codingame.com/)
- [Beecrownd](https://www.beecrowd.com.br/judge/en/login)
- [Dirlididi](http://dirlididi.com/client/index.html#)

---
## Como usar o TST

TST é o sistema de submissão das questões resolvidas por alunos nas provas e exercícios. Aqui vai um guia de como usar a ferramenta.

### Instalar
O script abaixo baixa e configura o tst de maneira automática. Não use a permissão root nele.

```sh
bash -c "$(curl -q -sSL http://bit.ly/tst084)"
```

### Comandos
** O comando `tst --help` mostra todos os comandos disponíveis do tst. Além disso, o `tst <command> -- help` vai mostrar mais detalhes sobre o comando específico.

Agora uma lista de todos os comandos:

Comando | Descrição
------- | -----------
**checkout** | Baixa uma questão do TST, cria um objeto e um diretório contendo o nome da questão passada como argumento.
**commit** | Envia a sua resposta para o servidor.
**login** | Faz o login para o tst-online usando um token e seu email. Automaticamente abrirá uma página no seu browser requisitando o token.
**ls** | Lista todos os objetos do TST disponíveis.
**test** | Valida sua resposta e roda os testes.
**update** | Atualiza o TST para a última versão estável.

### Exemplo de Uso
Nessa seção iremos simular o primeiro uso do TST, fazendo o login, resolvendo uma questão do TST, testando-a e  a submetendo para o servidor.

#### Login
Primeiro você precisar se logar no [TST-ONLINE](http://tst-online.appspot.com/) e, depois, logar-se no seu terminal usando sua conta. Para isso, use:

```sh
tst login
```

Esse comando irá abrir uma nova aba no seu browser mostrando o token necessário para realizar o login e seu e-mail usado no TST-Online. Copie o Token e cole no terminal como indicado.

Além dessa maneira, você pode fazer o seguinte:

Logar no [TST-ONLINE](http://tst-online.appspot.com/) e depois acessar diretamente o [LINK PARA GERAR O TOKEN](http://tst-online.appspot.com/activate). Por último logar no terminal usando:
```sh
tst login <token>
```

### Checkout
Agora vamos resolver uma questão, copie o checkout código de alguma questão do [TST](http://tst-online.appspot.com/#/) que você queria resolver e rode o seguinte comando:

```sh
tst checkout <codigo_questao>
```
Esse comando irá criar um novo diretório, vá para o diretório e comece a implementar a sua solução:

```sh
cd <codigo_questao>
```
Caso queira fazer o checkout com um nome mais amigável, como por exemplo o nome da própria questão ao invés de seu código, também é possível fazer diretamente no checkout:

```sh
tst checkout <codigo_questao> <nome_questao>
```
E em seguida:
```sh
cd <nome_questao>
```

### Testando
Após implementar sua solução, você pode testá-la usando:
```sh
tst test <arquivo_da_questao>
```
Onde `<arquivo_da_questao>` é seu arquivo **.py**.

Se você tiver apenas um arquivo **.py** no seu diretório você apenas precisa usar:

```sh
tst
```
Se você recebeu uma saída contendo apenas pontos( Ex: `.`, `...`), vocês passou em todos os testes públicos e agora você pode submeter sua questão para o servidor.

### Enviando
Envie sua questão para o servidor:

```sh
tst commit <arquivo_da_questao>
```
Para verificar se você passou em todos os testes do servidor e sua resposta foi aceita use:

```sh
tst -s
```

### Respostas de erro

Comando | Descrição
------- | -----------
**e** | O programa quebra(erro durante execução).
**s** | Erro de sintaxe.
**a** | Erro de atributo.
**o** | EOFError -> O programa possui mais entradas que o TST pede. (Programa possui 3 input's mas o TST pede 2)
**z** | Divisão por zero.
**i** | Erro de indentação.

---
## Dificuldades Comuns

Uma lista de comentários sobre as principais dificuldades enfrentadas pelos alunos enquanto cursam a disciplina.

### Estruturas de Repetição
Esse é, provavelmente, o assunto que mais atrasa o avanço dos alunos na disciplina. Trabalhados durante as unidades 4 e 5, os *loops* (ou laços) produzidos através do `for` e do `while` não são de compreensão trivial para aqueles que estão iniciando na programação. Isso ocorre, principalmente, devido à dificuldade em compreender quando uma linha de código será executada mais de uma vez. O uso de *prints* no interior dos laços ou de visualizações são muito úteis para compreender melhor o assunto e encontrar possíveis erros em programas.

### Algoritmos de Ordenação
Abordado na unidade 7 da disciplina, esse assunto também costuma gerar dificuldades para os alunos. O primeiro motivo é que a produção de um algoritmo de ordenação envolve todos os assuntos vistos até então na disciplina, desde estruturas condicionais para definir se elementos devem trocar de posição, até o encapsulamento em funções. Além disso, tal qual nas unidades 4 e 5, não é trivial compreender o que ocorre a cada iteração dos *loops* e perceber como cada uma delas é um pequeno passo para a obtenção da resposta final. Para lidar com essas dificuldades, o ideal é compreender o conceito desses algoritmos antes de tentar implementá-los e também buscar visualizações deles.
