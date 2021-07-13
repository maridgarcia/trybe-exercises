const sum = require('./sum');

//Teste se o retorno de sum(4, 5) é 9
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
