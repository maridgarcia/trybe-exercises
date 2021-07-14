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
  test('if encode coverts a, e, i, o, u to 1, 2, 3, 4 and 5 respectively', () => {
    expect(encode('car')).toEqual('c1r');
    expect(encode('bed')).toEqual('b2d');
    expect(encode('pit')).toEqual('p3t');
    expect(encode('cow')).toEqual('c4w');
    expect(encode('sun')).toEqual('s5n');
  });
})
