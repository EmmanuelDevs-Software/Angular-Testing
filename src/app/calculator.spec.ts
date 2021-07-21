import { Calculator } from './calculator';

describe('Calculator', () => {
  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });
});


describe('Test for Calculator', () => {
  describe('Test for multiple', () => {
    it('multiply for 3', () => {
      const calculator = new Calculator();
      const numero = calculator.multiply(3, 3);
      expect(numero).toEqual(9);
    });
  });
});


describe('Test for Dividir', () => {
  describe('Test for Divide', () => {
    it('Divide for 2', () => {
      const calculator = new Calculator();
      const numero = calculator.divide(6, 2);
      expect(numero).toEqual(3);
    });
  });
});


describe('Test for Dividir por 0', () => {
  describe('Test for Divide 0', () => {
    it('Divide for 2', () => {
      const calculator = new Calculator();
      const numero = calculator.divide(6, 0);
      expect(numero).toEqual(null);
    });
  });
});