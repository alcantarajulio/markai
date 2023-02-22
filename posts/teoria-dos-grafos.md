---
title: Teoria dos grafos
discipline: Teoria dos grafos
---



## Ementa

- Definição formal de grafo e representações
- Tipos de grafos
  - Simples
  - Direcionado
  - Completo
  - Conectado
  - Multigrafo
  - Bipartido
  - Caminho
  - Ciclo
  - Subgrafo
  - Ponderado
  - Gerador 
  - Induzido
  - Árvore 
  - Árvore geradora
  - Aleatório
- Definição, propriedades, operações e algoritmos associados a conceitos de grafos
  - Grau e vizinhança
  - União e intersecção de grafos
  - Isomorfismo
  - Decomposição
  - Corte
  - Cobertura
  - Ponte
  - Passeio
  - Trilha
  - Circuito
  - Cintura
  - Clustering
  - Busca em árvores
  - Co-árvore
  - Matróides
  - Vértice de corte
  - Separações e blocos
  - Orientações
  - Conectividade
  - Contração
- Tópicos Avançados
  - Circuitos de Euler e Hamiltoniano
  - Fluxos em redes
  - Grafos planares
  - Estabilidade e cliques
  - Coloração
  - Casamento
- Noções básicas de complexidade de algoritmos e aproximações

## Visão Geral

A disciplina é pautada em apresentar a teoria que embasa todo o estudo e as aplicações dos grafos na Ciência da Computação, porém não está focada apenas em aspectos teóricos. Também são apresentadas ferramentas para o desenvolvimento de aplicações, visualização e fixação dos conceitos ministrados. São estas:
- [yEd](https://www.yworks.com/products/yed)
  - Esta é a primeira ferramenta que o aluno tem contato, com ela é possível construir vários tipos de representações, dos tipos de grafos mais simples até um dos mais complexos principalmente em termos de visualização.

- [API JgraphT](https://jgrapht.org/)
  - É uma API desenvolvida em Java e que traz todos os conceitos estudados modelados e em sua grande maioria implementados e disponíveis para uso. Ao usá-la é possível enxergar resultados e aplicações práticas dos conceitos expostos em sala de aula

- [Neo4J e Cypher](https://neo4j.com/sandbox/)
  - O Neo4j é um sistema de gerenciamento e armazenamento de dados através de grafos (graph database).
  - Cypher é uma linguagem de consulta semelhante a SQL que se baseia no uso de padrões de nós e relacionamentos em um grafo.

## Materiais de estudo

### Exercícios Práticos

### 2019.1

| EP | Link | Dados | Formulário de Entrega |
| :--: | :--: | :--: |  :--: |
| 01 | [Link](https://drive.google.com/file/d/1RDnO3Oe4bah7ijkNVO54T-Bv1vtAGeyV/view?usp=sharing) | [Astrounautas](https://drive.google.com/file/d/10PoT2zxZgzKRjEtOdieZxtfiwGf_xyRh/view?usp=sharing) | [Link](./20191/exerciciosPraticos/ep01-formulario.md) |
| 02 | [Link](https://drive.google.com/file/d/1mAb_FhvmZRej2upXWcPFINjflpypuYC0/view?usp=sharing) | [E-mails](https://drive.google.com/file/d/1_K2UBDmcTBnnTPZbBsf1p135W74ocokS/view?usp=sharing) | [Link](./20191/exerciciosPraticos/ep02-formulario.md) |
| 03 | [Link](https://drive.google.com/file/d/1j8RQdKZAUD0oZEEwmstDoa_wSMapNEXd/view?usp=sharing) | Nenhum | [Link](./20191/exerciciosPraticos/ep03-formulario.md) |
| 04 | [Link](https://drive.google.com/file/d/1ba0pF3vM96kF2A1lecDjDu3XZTWoovbX/view?usp=sharing) | [Compras](https://drive.google.com/file/d/1tmkXP5bc17Wr5Jjr-KRHO3z6aT6gQ2p9/view?usp=sharing) e [Pessoas](https://drive.google.com/file/d/18osrFtjt0qivSP68p5TX5rrrKYu86YbP/view?usp=sharing) | [Link](./20191/exerciciosPraticos/ep04-formulario.md) |

## Avaliação

Não há provas na disciplina, a avaliação é realizada através de:

- **MTI** - Minitestes teóricos individuais (escritos).

- **MTG** - Minitestes teóricos (escritos) em grupo de 3 a 4 integrantes.

- **EPG** - Exercícios práticos em grupo, que consiste na resolução de problemas utilizando a teoria ministrada e a(s) ferramenta(s) disponibilizada(s).
O EPG é dividido em duas etapas, a primeira etapa é realizada em sala, onde o planejamento da solução é feito, registrado e entregue à professora, a segunda etapa consiste na implementação da solução propriamente dita.

A nota é **acumulativa** e calculada da seguinte maneira:
- **Média:** ((MTG1+MTI1+MTG2) + (MTI2+MTG3+MTG4) + (MTI3+MTG5+MTG6) + (EPG1+EPG2+EPG3+EPG))/4

Ao final da disciplina o aluno terá aprendido conceitos e algoritmos importantes que o tornarão capaz de desenvolver aplicações eficientes para resolução, representação e otimização de problemas utilizando grafos.


## Dicas

- Tente não deixar o conteúdo acumular, pois uma aula precisa e utiliza o conteúdo da aula anterior, o assunto é totalmente acumulativo e os conceitos aprendidos serão utilizados durante toda a disciplina.

- Faça resumos, leitura ativa das notas de aula e slides e sempre procure se aprofundar nos conceitos.

- Procure sempre tirar suas dúvidas, faça uso da monitoria.
  Converse com o(a) monitor(a) e/ou com a professora, não guarde suas dúvidas.

- Pratique bastante! Ao praticar utilizando os exercícios conceituais e em paralelo utilizar as ferramentas propostas, você irá fixar muito mais cada conceito e saberá pô-los em prática.

- Não deixe de fazer os quizzes, e tente fazê-los logo após as aulas, pois desse modo você consegue também perceber suas dificuldades e assim focar seus estudos nelas, além de estar praticando.

- Sempre faça uso do [repositório da disciplina](https://github.com/pdlmachado/GraphTheory-JGraphT), nele há exemplos de todos os conceitos vistos implementados utilizando a JgraphT. Se possível, depois de estudar a teoria, tente implementar estes exemplos também, pois assim você poderá comparar com as suas soluções, e assim você estará testando seus conhecimentos e adquirindo novos.

- Faça uso da JgraphT, além de você está se aperfeiçoando também na linguagem Java, você aprenderá sobre classes e métodos que poderão facilitar a resolução de problemas comuns, além de tornar a sua aplicação eficiente e prática usando grafos.

- Teoria dos grafos é uma disciplina muito importante, pode-se apontá-la como um dos pilares da Ciência da Computação, não negligencie! Todo o aprendizado adquirido, facilitará o seu entendimento em outras disciplinas e áreas da computação.
  Um profissional que consegue modelar problemas utilizando os conceitos e a estrutura de grafos, é muito valorizado no mercado, além de desenvolver ótimas soluções para problemas, pois seu pensamento abstrato e o seu conhecimento sobre padrões e ferramentas são eficientes, e tudo isso pode ser concretizado com a ajuda dos conceitos da teoria dos grafos.

- Recomendo que você escute este podcast sobre a [A beleza matemática dos Grafos](https://open.spotify.com/episode/3NNGjltaoLbkjn4SU5qVHA?si=V1tF2jNTSFC1pjl56X4-sQ), vai lhe dar uma ótima dimensão sobre aplicações da teoria dos grafos.

[Cypher](https://www.remwebdevelopment.com/blog/sql/some-basic-and-useful-cypher-queries-for-neo4j-201.html) - Link útil para o Exercício prático 4 com Cypher para o Neo4j

[Manual Cypher Neo4J](https://neo4j.com/docs/cypher-manual/current/) - Documentação da linguagem de consulta Cypher, utilizada no [Neo4J](https://neo4j.com/sandbox/). Este link será útil para a prática da disciplina que requer conhecimentos de [Neo4J](https://neo4j.com/sandbox/) e consultas atráves de Cypher.

## Extras
Apesar de ser uma disciplina "atípica", seu conteúdo mescla assuntos vistos em outras disciplinas, por exemplo: as árvores, que são estruturas vistas em EDA/LEDA, também são abordadas em grafos. Por isso, é muito importante que você dedique tempo para fixar os conceitos nela apresentados, pois apesar de serem muitos, acabam sendo bastante vistos ao longo do curso.

Outro extra é: O site do NEo4J (https://neo4j.com/developer/about-graphacademy/) possui uma "academia" que oferece diversas certificações nessa área, então se você gostar do conteúdo visto, vale a pena conferir.

## Dificuldades Comuns

### Organização

Uma das principais dificuldades enfrentadas por alunos que cursam a disciplina é a questão da quantidade de conceitos, absorvê-los e colocá-los em prática. No início, em alguns casos, se torna um pouco difícil, principalmente pela gama conceitual e a facilidade de confusão entre definições semelhantes. Por isso, é importante que o aluno organize o seu tempo para estudar bem cada conceito com antecedência e não deixar de fazer os exercícios e implementações. Fazendo isso será possível absorver bem o que a disciplina oferece e enxergar as suas deficiências sobre cada assunto, lembrando que, assim que forem identificadas, procure o(s) monitore(s) e/ou a professora.

### Tempo

Os mini testes individuais (MTI) ou em grupo (MTG) são aplicados antes ou após a ministração da aula, não possuem um padrão de quantidade de questões e a professora define o tempo para a sua realização, normalmente ficando em torno de 15 à 40 minutos, o que torna ainda mais importante a prática e firmeza no assunto.

### Ferramentas
Dificuldades de cada ferramenta que a disciplina faz uso:

- [yEd](https://www.yworks.com/products/yed)
   - Não há grandes dificuldades com o uso do yEd pois ele é mais utilizado para a construção visual de grafos e conceitos.

- [API JgraphT](https://jgrapht.org/)
    - Na maioria dos casos, os alunos sentem mais dificuldades com a API JgraphT, usada para auxiliar na manipulação e resolução de problemas envolvendo grafos. É uma biblioteca que possui uma boa documentação, porém, não há grande disponibilidade de tutoriais e materiais de fácil acesso, por isso é muito importante que o aluno use todos os materiais disponibilizados e também o repositório da disciplina como fonte de consulta.

    - Inicialmente, há dificuldades para instalar as dependências da JgraphT junto ao [repositório da disciplina](https://github.com/pdlmachado/GraphTheory-JGraphT), mas o aluno não deve se preocupar, pois a própria professora disponibiliza um tutorial para explicar como proceder.

- [Neo4J e a linguagem Cypher](https://neo4j.com/sandbox/)
   - Embora Neo4J e Cypher sejam ótimas ferramentas, possuem certa dificuldade de utilização, por causa da escassez de materiais disponíveis na internet. Recomenda-se então que você siga o material da disciplina com o auxílio de algumas informações no site do Neo4J e procure informações com os monitores, caso precisar. 
