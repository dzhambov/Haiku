export class Haiku {
  constructor(line1, line2, line3) { 
    this.allLines = [line1, line2, line3];
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  }
  lineNumber () {
    var lineArray = this.allLines;
    return lineArray.length;
  }
  lineSyl () {
    let line = this.line1.split("");
    console.log(line);
    let vowelCount = 0;
    for (var i = 0; i < line.length; i++) {
      if (this.vowels.includes(line[i])) {
        vowelCount ++;
      }
      console.log(vowelCount);
    }
    return vowelCount;
  }
};