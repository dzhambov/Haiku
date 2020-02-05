export class Haiku {
  constructor(line1, line2, line3) { 
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  lineNumber () {
    var lineArray = Object.values(this);
    return lineArray.length;
  }
  line1syl () {
    let line1Words = this.line1.split(" ");
    console.log(line1Words)
  }
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
