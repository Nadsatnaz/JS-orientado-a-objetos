# Programação orientada a objetos

# Classes

Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes **não** introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

## Definindo Classes

As Classes são, de fato, "funções especiais", e, assim como você pode definir ["function expressions"](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/function) e ["function declarations"](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function), a sintaxe de uma classe possui dois componentes: ["class expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)" e  ["class declarations"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class).

### Declarando Classes

Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave `class` seguida pelo nome da classe (aqui "Retangulo").

```jsx
class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
}
```

### Uso antes da declaração (Hoisting)

Uma diferença importante entre **declarações de funções** das **declarações de classes**, é que  declararações de  funções são [hoisted](https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting) e declarações de classes não são. Primeiramente deve declarar sua classe para só então acessá-la, pois do contrário o código a seguir irá lançar uma exceção: `[ReferenceError](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)`:

```jsx
const p = new Retangulo(); // Erro de referência (ReferenceError)

class Retangulo {}
```

## Métodos

### Construtor

O método `[constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)` é um tipo especial de método para criar e iniciar um objeto criado pela classe. Só pode existir um método especial com o nome "constructor" dentro da classe. Um erro de sintáxe `SyntaxError` será lançado se a classe possui mais do que uma ocorrência do método `constructor`.

Um construtor pode usar a palavra-chave `super` para chamar o construtor de uma classe pai.

### Métodos Estáticos

A palavra-chave `[static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)` define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada. Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação.

## Encapsulamento das propriedades

****Getters e Setters****

Algumas vezes não é possível controlar o que é atribuído a esta propriedade, as classes JavaScript contam com dois métodos especiais: um com o prefixo get que tem a função de retornar um valor, e outro precedido pela palavra set que serve para atribuir um valor. Ambos funcionam como se fossem uma propriedade da classe. 

Quando é necessário implementar uma regra para mudar ou pegar o valor de uma propriedade, utilizamos os `getters`e `setters`que basicamente serão funções que intermediarão o acesso à propriedade.
