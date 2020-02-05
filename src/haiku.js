export class Haiku {
  constructor(line1, line2, line3) { 
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  lineNumber () {
    console.log(this);
    var lineArray = Object.values(this);
    console.log(lineArray);
    return lineArray.length;
  }
};