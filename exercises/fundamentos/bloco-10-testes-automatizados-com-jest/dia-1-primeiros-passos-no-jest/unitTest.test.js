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
describe('test if function myRemove', () => {
  test('if function removes the parameter item', () => {
    const numberArray = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(numberArray, 3));
  })
  test('myRemove([1, 2, 3, 4], 3) dont return [1, 2, 3, 4]', () => {
    const numberArray = [1, 2, 3, 4];
    expect([1, 2, 3, 4]).not.toBe(myRemove(numberArray, 3));
  })
})
