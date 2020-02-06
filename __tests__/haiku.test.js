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
  test('should split lines into an array of words', () => {
    haiku.seperateLineWords();
    expect(haiku.line1).toEqual(['Like', 'crunchy', 'cornflakes']);
    expect(haiku.line2).toEqual(['Gold', 'leaves', 'rustle', 'underfoot']);
    expect(haiku.line3).toEqual(['Beauty', 'in', 'decay']);
  });
  test('should determine the amount of syllables in line 1', () => {
    haiku.seperateLineWords();
    haiku.lineSyl();
    expect(haiku.syllables[0]).toEqual(6);
  });
  test('should determine the amount of syllables in line 2', () => {
    haiku.seperateLineWords();
    haiku.lineSyl();
    expect(haiku.syllables[1]).toEqual(10);
  });
  test('should determine the amount of syllables in line 3', () => {
    haiku.seperateLineWords();
    haiku.lineSyl();
    expect(haiku.syllables[2]).toEqual(6);
  });
});                            