//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixStr) {
    this.matrix = matrixStr;
  }
  get rows() {
    return this.matrix.split('\n').map(
        line => (line.length==1)?
                [ Number(line)]:
                line.split(' ').map(letterNumber => Number(letterNumber)));
  }

  get columns() {
    let localcolumns = [];
    for(let i=0; i<this.rows.length; i++){
        this.rows[i].map( (rowItem, index) =>{
             if(localcolumns[index] == undefined) 
                localcolumns[index] = [];
            localcolumns[index].push(rowItem);
        });
    }
    return localcolumns;
  }
}
