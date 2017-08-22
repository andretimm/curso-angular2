# Treinamento de Angular 2+
[Angular Oficial][angular]
[ES 6][es6]
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

### Módulos
Ajuda a organizar a aplicação e a modularizar.

``` js
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
* `declarations` : Todos os componentes, diretivas, factory ou pipe do meu módulo.
* `imports` : Módulos importados para ser usado no meu módulos atual ou dentro de algum outro component.
* `providers` : Serviços disponiveis para serem utilizados nos componentes declarados no módulo.
* `bootstrap` : Encontrado somente no módulo raiz do projeto, indica qual componente deve ser instânciado ao ser executada a aplicação (container).
* `exports` : Define quais componenetes do módulos vão ficar visível para outros módulos.

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
#### Criar módulos com o CLI

``` Shell
    $ ng g module meu-modulo
```

ou

``` Shell
    $ ng g m meu-modulo
```

[angular]: https://angular.io/
[node]: https://nodejs.org
[es6]: http://es6-features.org/#Constants