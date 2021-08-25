# Manual de Instruções

## Link do Repositório

> <https://github.com/gustavo-m-vieira/AlgebraLinearComp2021.1/tree/master/trabalho3>

## Como Executar

+ Windows

  > Clique no executável e um terminal irá abrir

+ Linux

  > Abra o terminal na mesma pasta do executável e digite

  ```bash
  ./trabalho3-linux
  ```

+ macos

  > Abra o terminal na mesma pasta do executável e digite

  ```bash
  ./trabalho3-macos
  ```

## Primeiros Passos

> Um terminal será aberto (ou já estará aberto) e pedirá o nome (com a extensão .txt) do arquivo de input.

> O arquivo deve estar na mesma pasta do executável.

> O terminal finalizará e gerará um arquivo answer.txt no mesmo diretório do executável.

## Formato do arquivo de input

> Não existe empty lines entre os valores

```jsonc
// ICOD
1
// Quantidade de pontos
3
// pontos no formato x y
1.0 2.0
2.5 3.5
4.0 8.0
// coordenada x para estimar y
3.25
```

## Formato do arquivo de output

> Não existe empty lines

```jsonc
// Diz qual método utilizou
Resolvido pelo método Interpolação
// Valor do y
y: 0.56
// Em caso de erros mostrará aqui
// Mensagem final dizendo que é uma aproximação
Ressalta-se que existe um erro associado a esses valores, pois são aproximações.
```
