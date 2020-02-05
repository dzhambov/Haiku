import { Haiku } from './../src/haiku.js';

describe ('Haiku', () => {
  test('should determine if the haiku contains 3 lines', () => {
    var haiku = new Haiku ("Like crunchy cornflakes", "Gold leaves rustle underfoot", "Beauty in decay");
    expect(haiku.lineNumber()).toEqual(3);
  });
});