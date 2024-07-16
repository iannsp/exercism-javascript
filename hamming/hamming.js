//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna1, dna2) => {
    if(dna1.length != dna2.length)
        throw new Error('strands must be of equal length');
    return dna1.split('').map( (letter, pos)=> (letter== dna2[pos])?0:1).
        reduce( (acc, dif) => acc+dif,0);
};
