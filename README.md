# Treinamento de Angular 2+
* [Angular Oficial][angular]
* [ES 6][es6]
* [NG2 Bootstrap][ng2Bootstrao] Abstração do Bootstrap sem o JQuery.
* [Materialize][material] Abstração do Materialize sem o JQuery.
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
São uma form de passar instruções para o template.
* `*ngIf` : Mesmo comportamento do if, mas para o template. Não recomentado para mostrar e esconder muitos blocos, utilizar `hidden` nestes casos.
* `ngSwitch` e `ngSwitchCase` : Funciona como um bloco de `switch` dentro do template.

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

### Templates 
Contém os códigos html para ser utilizados nos componentes.
* No template pode ser definido variáveis, basta colocar dentro da sua tag `#nomeVar`, exemplo :
```html
    <input type="text" #valorInpur>
```

### Data Binding 
É a forma de associar informações do component para o template e vice-versa.
* Interpolation : `{{ valor }}` onde `valor` é um objeto do componente.
* Property binding : `[propriedade]="valor"`.
* Two Way Data Binding : Valor do template e do componente atualizados ao mesmo tempo. `[(ngModel)]=propriedade`, para utilizar precisa importar o FormsModule.
* Class e Style Binding : Uma forma de `Property Binding` para css.
* Event Binding : Binding de eventos, para fazer o binding se usa os parenteses : `(evento)`.
* Input/Output : Serve para passar um valor para o compinente. Para Declarar que a variável se trata de um Input/Output basta coloca `@Input` ou `@Output` na sua declaração.
* Acessando DOM : Se utilizada o decorator `@ViewChild('')` em uma variável do tipo `HTMLElement`. Dentro do `ViewChild` deve se passar como parâmetroo nome da variável declarada no template : `@ViewChild('minhaVar')`.

# Comandos do Angular CLI

```shel
    $ ng lint
```
Escaneia o proejeto verificando as boas práticas do Angular.


```shel
    $ ng test
```
Executa os teste unitários com [Jasmine][jasmine].

```shel
    $ ng e2e
```
Executa os testes de integração/carregamento de dados com e2e do [Protractor][protractor].

## Criando projeto com o CLI

```shell
    $ ng new nome-projeto
```
Assim o CLI vai criar o projeto e baixar todas as depedências do npm.
Para rodar o projeto no navegador, va ate a pasta do seu projeto e execute :

```shell
    $ ng serve
```

## Criar componentes com o CLI

``` Shell
    $ ng g component meu-component
```

ou

``` Shell
    $ ng g c meu-component
```
## Criar módulos com o CLI

``` Shell
    $ ng g module meu-modulo
```

ou

``` Shell
    $ ng g m meu-modulo
```

## Criar serviços com o CLI

``` Shell
    $ ng g service meu-servico
```

ou

``` Shell
    $ ng g s meu-servico
```

## Fazendo o Build do projeto

#### Build de desenvolvimento
É gerado o build dentro da pasta `/dist/`.
Serve para tester a aplicação e debugar.
```shell
    $ ng build
```
ou 
```shell
    $ ng build --dev
```

#### Build de produção
É gerado o build dentro da pasta `/dist/`.
Arquivos minificados e ofuscados.
```shell
    $ ng build --prod
```

## Usando libs externas

Exemplo Bootstrap:

```shel
    $ npm install --save bootstrap@next
```
Adicionar os arquivos necessários no `.angular-cli.json`, conforme exemplo :
```JSON
    "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "styles.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js"
      ],
```
Apenas arquivos de fonte que são importados diretamente no arquivo `index.html`.

[angular]: https://angular.io/
[node]: https://nodejs.org
[es6]: http://es6-features.org/#Constants
[ng2Bootstrao]: http://valor-software.com/ngx-bootstrap/#/
[material]: https://www.npmjs.com/package/angular2-materialize
[jasmine]: https://jasmine.github.io/
[protractor]: http://www.protractortest.org/