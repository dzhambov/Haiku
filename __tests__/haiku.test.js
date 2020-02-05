import { Haiku } from './../src/haiku.js';

describe ('Haiku', () => {
  let haiku 
    const line1 = "Like crunchy cornflakes"
    const line2 = "Gold leaves rustle underfoot";
    const line3 = "Beauty in decay";
  
  beforeEach(() => {
    haiku = new Haiku(line1, line2, line3);
  });
  test('should determine if the haiku contains 3 lines', () => {
    expect(haiku.lineNumber()).toEqual(3);
  });

});