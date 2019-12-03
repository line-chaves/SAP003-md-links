# Markdown Links
Markdown Links é uma biblioteca que lê arquivo `.md`, analisa o mesmo e retorna os links encontrados no arquivo.

## Instalação da biblioteca
Para instalar a biblioteca é necessario primeiramente ter instalado em sua maquina o NodeJS. 
Em seguida, em seu terminal insira o comando `npm install` +  https://github.com/line-chaves/SAP003-md-links

```sh
User@User:~/SeuProjeto$ npm install https://github.com/line-chaves/SAP003-md-links
```

## CLI (Command Line Interface - Interface de Linha de Comando)

A aplicação pode ser executada no terminal pela seguinte maneira: 

```sh
md-links <path-to-file> [options]
```
Por exemplo:

```sh
$ md-links ./some/example.md
http://algo.com/2/3/ Link de algo
https://outra-coisa-.net/algum-doc.html algum doc
http://google.com/ Google
```
## JavaScript
A biblioteca tambem pode ser importada tambem, utilizando o require, por exemplo:
``` js
const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{ href, text }]
  })
  .catch(console.error);
```
