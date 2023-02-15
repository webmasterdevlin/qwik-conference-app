import {add, subtract, multiply, divide} from '../compute';

// unit testing
describe('compute helper', () => {
  // add
  test('should add two arguments', () => {
    const result = add(3, 3);
    expect(result).toBe(6);
  });

  // subtract
  test('should subtract two arguments', () => {
    const result = subtract(3, 3);
    expect(result).toBe(0);
  });


  // multiply
  test('should multiply two arguments', () => {
    const result = multiply(3, 3);
    expect(result).toBe(9);
  });


  // divide
  test('should divide two arguments', () => {
    const result = divide(3, 3);
    expect(result).toBe(1);
  });

});
