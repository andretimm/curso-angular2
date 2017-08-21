# Treinamento de Angular 2+
[Angular Oficial][angular]
## Ambiente de Desenvolvimento
### Requisitos
* [Node Js][node]

``` shell
    $ npm install -g @angular/cli
    $ npm install -g typescript
```
### Componentes
Encapsula : 
* Template
* Dados a ser mostrado na tela
* Comportamento da VIEW

### Serviço
Responsável pela comunicação dos componentes com o backend e injeção de classes.

### Roteamento
Responsável pela navegação.

### Diretiva
Responsável por modificar elementos DOM e/ou seu comportamento.

### Diretiva
Responsável por modificar elementos DOM e/ou seu comportamento.

## Criando primeiro projeto

```shell
    $ ng new nome-projeto
```
Assim o CLI vai criar o projeto e baixar todas as depedências do npm.
Para rodar o projeto no navegador, va ate a pasta do seu projeto e execute :

```shell
    $ ng serve
```

#### Criar componentes com o CLI

``` Shell
    $ ng g component meu-component
```

ou

``` Shell
    $ ng g c meu-component
```

[angular]: https://angular.io/
[node]: https://nodejs.org