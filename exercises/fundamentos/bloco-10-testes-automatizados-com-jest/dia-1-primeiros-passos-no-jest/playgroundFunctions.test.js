const { TestWatcher } = require('@jest/core');
const {
  encode,
  decode,
} = require('./playgroundFunctions');

// Teste se encode e decode são funções;
describe('encode and decode are functions', () => {
  test('encode and decode are defined as', () => {
    expect(typeof encode).toBeDefined();
    expect(typeof decode).toBeDefined();
  });
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  test('if encode converts a, e, i, o and u to 1, 2, 3, 4 and 5 respectively', () => {
    expect(encode('car')).toEqual('c1r');
    expect(encode('bed')).toEqual('b2d');
    expect(encode('pit')).toEqual('p3t');
    expect(encode('cow')).toEqual('c4w');
    expect(encode('sun')).toEqual('s5n');
  });
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
test('if encode converts 1, 2, 3, 4 and 5 to a, e, i, o and u respectively', () => {
    expect(decode('c1r')).toEqual('car');
    expect(decode('b2d')).toEqual('bed');
    expect(decode('p3t')).toEqual('pit');
    expect(decode('c4w')).toEqual('cow');
    expect(decode('s5n')).toEqual('sun');
  });
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
  test('string returned has the same length as the parameter', () => {
    expect(encode('car')).toHaveLength(3);
    expect(decode('car')).toHaveLength(3);
  });
})


