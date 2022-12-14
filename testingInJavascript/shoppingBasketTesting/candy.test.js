const Candy = require('./candy');

describe('Candy', () => {
  const candy = new Candy('Mars', 4.99);
  describe('getName', () => {
    it('returns the name of the candy', () => {
      expect(candy.getName()).toBe('Mars');
    });
  });

  describe('getPrice', () => {
    it('returns the price of the candy', () => {
      expect(candy.getPrice()).toBe(4.99);
    });
  });
});
