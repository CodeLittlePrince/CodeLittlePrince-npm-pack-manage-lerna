const m2 = require('..')

test('increse', () => {
  expect(m2.increase(1)).toBe(2)
  expect(m2.increase(2)).toBe(3)
  expect(m2.increase(10)).toBe(11)
});