---
title: Resumo de dados
discipline: Introdução à Probabilidade
fixed: true
---

Feito com base neste [slide](https://www.dropbox.com/s/3rubq11f0f4035j/Aula%202_Resumo%20de%20Dados.pdf?dl=0) e [esse](https://www.dropbox.com/s/d6j661koffx2mbx/Aula%203_Resumo%20de%20Dados%20%28continua%C3%A7%C3%A3o%29.pdf?dl=0).


## Estatística
É a ciência que coleta, organiza, descreve, analisa e e interpreta dados afim de extrair informações a respeito de uma [população](#População).

### Tipos

- Estatística Descritiva
Se preocupa com a *coleta*, *organização* e *descrição* dos dados experimentais.

- Estatística Inferencial
Utilizando da **Teoria Da Probabilidade**, a partir da observação de alguns dados experimentais, realizar análise e interpretação de dados com objetivo de generalizar e prever resultados.

### Conceitos Fundamentais
Alguns conceitos fundamentais.

- **População**: Conjunto de todos os elementos que possuem pelo menos uma característica em comum, que se relaciona com o problema que está sendo estudado.
- **Amostra**: Um subconjunto da população. Não podendo ser vazio.
- **Censo**: Levantamento de dados referente a todos os elementos da população.
- **Amostragem**: Levantamento de dados referentes a todos os elementos de uma *amostra*.
- **Variável**: Uma característica associada a cada elemento da população ou amostra. Normalmente denotada com letras maiúsculas.
    - ***Qualitativa***: Valores referentes a qualidade, atributo ou categoria
        - *Nominais*: Apresentam apenas aspecto qualitativo.
        - *Ordinais*: Apresentam uma categoria com ordenação natural.
    - ***Quantitativa***: Valores númericos
        - *Discretas*: Obtidas a partir do procedimento de **contagem**.
        - *Contínuas*: Obtidas a partir do procedimento de **mensuração**.

## Organização de dados
As  ferramentas  da  Estatística  são  ferramentas  poderosas  para  transformar  *dados* em *informações*.


### Tabela de distribuição de frequências

Legenda:

**FREQ. ABS** - Frequência Absoluta

**FREQ. REL** - Frequência Relativa

**FREQ. ACM** - Frequência Acumulada


**VARIÁVEL** | **FREQ. ABS** | **FREQ. REL** | **PORCENTAGEM** | **FREQ. ACM**
--- | --- | --- | --- | ---
A variável | Quantas vezes aparece | Quantas vezes aparece dividido pelo total | FREQ. REL * 100% | Frequência acumulada com as anteriores(soma)

## Agrupamento de variáveis por classes

### Como fazer

1. Tenha os dados
2. Determine o número de classes(***k***) 
   1. n <= 25 -> k = 5
   2. n > 25 -> k = √n
3. Tenha a *Amplitude total*(***A_total = X_max - X_min***)
4. Amplitude da classe(***∆=A_total / k***)
5. Delimite as classes ~~intervalos~~
6. Construa a tabela de frequências com essas informações

## Gráficos

### Gráfico de colunas

Adequado para variáveis *quantitativas discretas* mas também pode ser usado para variáveis qualitativas desde que os nomes sejam pequenos.

### Gráfico de pizza

Adequado para variáveis *quantitativas nominais* mas também pode ser usado para variáveis *quantitativas discretas* desde que não assumam uma quantidade muito grande de valores.

#### Construção

Este  gráfico  é  caracterizadopor  um  círculo  (de  raio  arbitrário)  representando  opercentual  **total**  dos  dados,  o  qual  é  dividido  em  **fatias** que  correspondem,  proporcionalmente,  às  frequências  comque  as  categorias  (ou  valores)  da  variável  ocorrem.

### Histograma

Adequado para representar dados em classes.

#### Construção

Este  gráfico  é  uma  adaptaçãodo  gráfico  de  colunas:  as  bases  das  colunas  correspondemaos  intervalos  de  classes  e  as  alturas  são  proporcionais  àsfrequências  absolutas  (***ni***),  relativas  (***fi***)  ou  densidades  defrequências  (***ni/∆i*** ou ***fi/∆i***)  de  cada  classe.

## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>
