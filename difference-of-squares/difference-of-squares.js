//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(serieLength) {
    this.serie = Array.from({length: serieLength}, (value ,index) => index+1);
  }

  get sumOfSquares() {
    return this.serie.map( (value)=> value**2).reduce( (acc, value)=> acc+value,0 );
  }

  get squareOfSum() {
    return this.serie.reduce( (acc, value)=> acc+value,0 )**2;
  }

  get difference() {
    return Math.abs(this.sumOfSquares - this.squareOfSum);
  }
}
