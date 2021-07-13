const { 
  sum, 
  myRemove, } = require('./unitTest');

// Testes para a função "sum":
describe('test if the function sum', () => {
  test('sum 4 + 5', () => {
    expect(sum(4, 5)).toBe(9);
  })
  test('sum 0 + 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  test('throw error when a string is passed', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow()
});
test('message when a string is passed', () => {
  expect(() => {
    sum(4, "5");
  }).toThrow('parameters must be numbers')
});
})

// Testes para a função "myRemove":
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
describe('test if function myRemove', () => {
  const numberArray = [1, 2, 3, 4];
  test('if function removes the parameter item', () => {
    expect([1, 2, 4]).toEqual(myRemove(numberArray, 3));
  })
})