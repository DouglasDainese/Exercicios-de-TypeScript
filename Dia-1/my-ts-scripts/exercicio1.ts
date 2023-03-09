/* Temos uma API que começou a ter diversos erros e apresentar bugs frequentes. 
Como solução, o CTO do time, avaliou que utilizar o Typescript em suas funções,
diminuiria um pouco desses problemas.

Para isso você foi direcionado a modificar as funções abaixo, escritas em Javascript,
para que fossem tipadas e executassem sem erros no compilador de Typescript:
Observação: Não é necessário alterar o valor dos parâmetros passados.


const numberInput = 7;

const isItAPrime = (param) => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);
*/

const numberInput: number = 7;

const isItAPrime = (param: number): boolean => {
  for (let i: number = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

/* Essa função é responsável por validar se o formato do e-mail está correto.

const emailInput = 'email@email.com';

const validateEmailFormat = (param) => {
var re = /\S+@\S+\.\S+/;
return re.test(param);
};

console.log(validateEmailFormat(emailInput))
*/

// Essa função é responsável por validar se o formato do e-mail está correto.

const emailInput: string = 'email@email.com';

const validateEmailFormat = (param: string): boolean => {
  const re: RegExp = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput));

/*// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

const numberList = [10, 5, 18, 2, 8, 23];

const sortInput = (param) => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));*/

const numberList: Array<number> = [10, 5, 18, 2, 8, 23];

const sortInput = (param: typeof numberList): typeof numberList => {
  return param.sort(function (a: number, b: number) { return a - b });
};

console.log(sortInput(numberList));

/*
Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
const peopleInput = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param) => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));
*/

type objInput = { name: string; age: number; };

const peopleInput: objInput = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param: objInput) => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));
