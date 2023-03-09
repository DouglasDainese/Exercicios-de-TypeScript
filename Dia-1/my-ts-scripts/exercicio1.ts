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