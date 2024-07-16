//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }
  calc(){
        let measures = new Set();
        this.sides.map( measure => measures.add(measure));
        if(  !measures.has(0) &
            this.sides[2] <= this.sides[0] + this.sides[1]  &&
             this.sides[0] <= this.sides[1] + this.sides[2] &&
             this.sides[1] <= this.sides[2] + this.sides[0] 
        )
        return measures.size;
        return false;
   }
  get isEquilateral() {
    return this.calc()==1;
  }

  get isIsosceles() {
    return this.calc()==2||this.calc()==1;
  }

  get isScalene() {
    return this.calc()==3;
  }
}
