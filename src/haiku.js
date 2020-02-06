export class Haiku {
  constructor(line1, line2, line3) { 
    this.wordLineArray = [];
    this.allLines = [line1, line2, line3];
    this.line1 = [];
    this.line2 = [];
    this.line3 = line3;
    this.vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    this.vowelCount = 0;
    this.syllables = [];
  }
  lineNumber () {
    var lineArray = this.allLines;
    return lineArray.length;
  }
  seperateLineWords () {
    const [firstLine, secondLine, thirdLine] = this.allLines;
    this.line1 = firstLine.split(" ");
    this.line2 = secondLine.split(" ");
    this.line3 = thirdLine.split(" ");
    this.wordLineArray.push(this.line1);
    this.wordLineArray.push(this.line2);
    this.wordLineArray.push(this.line3);
  
    
  }


  lineSyl () {
    
   

    for (let i=0; i < 3; i++) {
      let lineLetters = this.allLines[i].split("");
      for (var n = 0; n < lineLetters.length; n++) {
        if (this.vowels.includes(lineLetters[n])) {
          this.vowelCount ++;
        }
      }
      this.syllables.push(this.vowelCount);
      this.vowelCount = 0;
      console.log(this.wordLineArray[i]);
      let lineWords = this.wordLineArray[i];

      for (let y = 0; y < lineWords.length; y ++){
        

      }
    }
    // for(let i=0; i < wordLineArray[i].length; i ++) {
    //   if (th)
    // }
    
    }
  
  //   for (var i = 0; i < lineLetters.length; i++) {
  //     if (this.vowels.includes(lineLetters[i])) {
  //      this.vowelCount1 ++;
  //     }
  //   }
  //   // checking if the last letter is e
  //   for (var i = 0; i < lineWords.length; i ++) {
  //     lineWords.forEach(lineWord => {
  //       var lastLetter = lineWord.split('')
       
  //       if ((lastLetter[i = (lineWord.length - 1)]) === "e") {
  //         this.vowelCount1 -=1;
  //       }
  //     });
  //   }
  //   return this.vowelCount1;
  // }






//   lineSyl2 () {
//     let line = this.line2.split("");
//     let vowelCount = 0;
//     for (var i = 0; i < line.length; i++) {
//       if (this.vowels.includes(line[i])) {
//         vowelCount ++;
//       }
//     }
//     return vowelCount;
//   }
//   lineSyl3 () {
//     let line = this.line3.split("");
//     let vowelCount = 0;
//     for (var i = 0; i < line.length; i++) {
//       if (this.vowels.includes(line[i])) {
//         vowelCount ++;
//       }
//     }
//     return vowelCount;
//   }

};