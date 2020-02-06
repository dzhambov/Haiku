export class Haiku {
  constructor(line1, line2, line3) { 
    this.lineArray = [],
    this.allLines = [line1, line2, line3];
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    this.vowelCount1 = 0
  }
  lineNumber () {
    var lineArray = this.allLines;
    return lineArray.length;
  }
  lineSyl1 () {
    let lineLetters = this.line1.split("");
    let lineWords = this.line1.split(" ");
    console.log(lineWords);
    for (var i = 0; i < lineLetters.length; i++) {
      if (this.vowels.includes(lineLetters[i])) {
       this.vowelCount1 ++;
      }
    }
    // checking if the last letter is e
    for (var i = 0; i < lineWords.length; i ++) {
      lineWords.forEach(lineWord => {
        var lastLetter = lineWord.split('')
        console.log(lastLetter);
        if ((lastLetter[i = (lineWord.length - 1)]) === "e") {
          this.vowelCount1 -=1;
        }
      });
    }
    return this.vowelCount1;
  }

  seperateLineWords () {
    const [firstLine, secondLine, thirdLine] = this.lineArray;
    this.line1 = firstLine.split(" ");
    this.line2 = secondLine.split(" ");
    this.line3 = thirdLine.split(" ");
  }




  lineSyl2 () {
    let line = this.line2.split("");
    let vowelCount = 0;
    for (var i = 0; i < line.length; i++) {
      if (this.vowels.includes(line[i])) {
        vowelCount ++;
      }
    }
    return vowelCount;
  }
  lineSyl3 () {
    let line = this.line3.split("");
    let vowelCount = 0;
    for (var i = 0; i < line.length; i++) {
      if (this.vowels.includes(line[i])) {
        vowelCount ++;
      }
    }
    return vowelCount;
  }

};